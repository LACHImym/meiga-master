// ============================================================
// 名画MASTER 画像URL自動付与（Notion「DB作品リスト」）
// PD=可 なのに Wikimedia Commons の直リンクが無い作品に、Wikidata経由で
// 画像URL（PD画像URL）とカバー画像を付ける。GitHub Actionsから毎日実行。
//
// 判定の芯: Wikidata の「作品」項目（制作者 P170 あり・画像 P18 あり）だけを採用し、
// 作家ページや人物項目の画像を誤って貼らない。
//   ルートA: wiki プロパティ（Wikipedia記事）→ Wikidata項目 → P18
//   ルートB: 原題／名前で Wikidata を検索 → 制作者が「作家名」と一致する項目 → P18
//
// 使い方:  NOTION_TOKEN=... node scripts/resolve-images.mjs [--limit N] [--scan N] [--dry-run]
//   --limit N   1回に付与する最大件数（既定 20）
//   --scan N    1回に調べる最大件数（既定 limit×5。見つからない作品を毎晩調べ直さないための上限）
//   --dry-run   Notion に書き込まず、結果だけ表示（動作確認用）
//   --test "作家名|名前|原題|wikiURL|制作年|所蔵"  Notionを使わず1件だけ判定を試す（ローカル確認用）
// ============================================================
import { createHash } from "node:crypto";

const TOKEN = process.env.NOTION_TOKEN;
const DB_ID = "142ffcba-f9f0-80ae-8e36-cab4961ccafb"; // DB作品リスト
const UA = "meiga-master-resolver/1.0 (https://lachiart.com/quiz/meiga/; mym.lachi@gmail.com)";

const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const LIMIT = Number(args[args.indexOf("--limit") + 1]) || 20;
const SCAN = Number(args[args.indexOf("--scan") + 1]) || LIMIT * 5;
const TEST = args.includes("--test") ? args[args.indexOf("--test") + 1] : null;

if (!TOKEN && !TEST) { console.error("NOTION_TOKEN が未設定です"); process.exit(1); }

const sleep = ms => new Promise(r => setTimeout(r, ms));
const isCommons = u => /^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\//.test(u || "");

// ---------- Notion ----------
async function notion(path, body, method = "POST") {
  const res = await fetch(`https://api.notion.com/v1${path}`, {
    method,
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : undefined
  });
  if (!res.ok) throw new Error(`Notion API ${res.status} ${path}: ${await res.text()}`);
  return res.json();
}

function plain(prop) {
  if (!prop) return "";
  switch (prop.type) {
    case "title":
    case "rich_text": return (prop[prop.type] || []).map(t => t.plain_text).join("");
    case "select": return prop.select ? prop.select.name : "";
    case "url": return prop.url || "";
    default: return "";
  }
}

// 対象: PD=可・作家名/名前あり・PD画像URLがCommons直リンクでない（作成が古い順）
async function fetchTargets() {
  const rows = [];
  let cursor;
  do {
    const data = await notion(`/databases/${DB_ID}/query`, {
      page_size: 100,
      start_cursor: cursor,
      sorts: [{ timestamp: "created_time", direction: "descending" }], // 新しい作品（前夜の司書分）を優先
      filter: { and: [
        { property: "PD", select: { equals: "可" } },
        { property: "作家名", rich_text: { is_not_empty: true } }
      ] }
    });
    for (const r of data.results) {
      const p = r.properties;
      const image = plain(p["PD画像URL"]);
      if (isCommons(image)) continue;
      const title = plain(p["名前"]);
      if (!title) continue;
      rows.push({
        id: r.id, title,
        artist: plain(p["作家名"]),
        original: plain(p["原題"]),
        year: plain(p["制作年"]),
        museum: plain(p["所蔵"]),
        wiki: plain(p["wiki"]),
        oldImage: image,
        license: plain(p["出典・ライセンス"])
      });
    }
    cursor = data.has_more ? data.next_cursor : null;
  } while (cursor);
  return rows;
}

// ---------- Wikipedia / Wikidata ----------
async function getJson(url, attempt = 1) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA, "Accept": "application/json" } });
    if (res.status === 429 || res.status >= 500) throw new Error(`${res.status}`);
    if (!res.ok) throw Object.assign(new Error(`${res.status} ${url}`), { fatal: true });
    return res.json();
  } catch (e) {
    if (e.fatal || attempt >= 3) throw e;
    await sleep(1500 * attempt); // 一時的な接続切れ・レート制限は少し待って再試行
    return getJson(url, attempt + 1);
  }
}

// Wikipedia記事URL → Wikidata QID
async function qidFromWiki(wikiUrl) {
  const m = wikiUrl.match(/^https?:\/\/(en|ja)\.(?:m\.)?wikipedia\.org\/wiki\/([^#?]+)/);
  if (!m) return null;
  const lang = m[1];
  let title;
  try { title = decodeURIComponent(m[2]); } catch { title = m[2]; }
  const api = `https://${lang}.wikipedia.org/w/api.php?action=query&prop=pageprops&ppprop=wikibase_item&redirects=1&format=json&titles=${encodeURIComponent(title)}`;
  const data = await getJson(api);
  const page = Object.values(data.query?.pages || {})[0];
  return page?.pageprops?.wikibase_item || null;
}

const entityCache = new Map();
async function getEntity(qid) {
  if (entityCache.has(qid)) return entityCache.get(qid);
  const data = await getJson(`https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${qid}&props=claims|labels&languages=ja|en&format=json`);
  const e = data.entities?.[qid] || null;
  entityCache.set(qid, e);
  return e;
}
const claimIds = (e, prop) => (e?.claims?.[prop] || []).map(c => c.mainsnak?.datavalue?.value?.id).filter(Boolean);
const claimStr = (e, prop) => (e?.claims?.[prop] || []).map(c => c.mainsnak?.datavalue?.value).filter(v => typeof v === "string");

// 作家名（日本語）→ 作家のQID（候補は人物 Q5 のみ）
const artistCache = new Map();
async function artistQids(name) {
  if (artistCache.has(name)) return artistCache.get(name);
  const out = new Set();
  const key = name.replace(/\s+/g, "");
  for (const lang of ["ja", "en"]) {
    const data = await getJson(`https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(name)}&language=${lang}&uselang=ja&type=item&limit=5&format=json`);
    for (const s of data.search || []) {
      const label = (s.label || "").replace(/\s+/g, "");
      const aliases = (s.aliases || []).map(a => a.replace(/\s+/g, ""));
      if (label === key || aliases.includes(key)) out.add(s.id);
    }
    if (out.size) break;
    await sleep(200);
  }
  // 人物項目だけ残す
  const humans = [];
  for (const q of out) {
    const e = await getEntity(q);
    if (claimIds(e, "P31").includes("Q5")) humans.push(q);
  }
  artistCache.set(name, humans);
  return humans;
}

// Wikidata の制作年（P571）を西暦の数値で
function inceptionYear(e) {
  const t = e?.claims?.P571?.[0]?.mainsnak?.datavalue?.value?.time; // 例 "+1669-00-00T00:00:00Z"
  const m = t && t.match(/^([+-])(\d{4})/);
  return m ? Number(m[2]) * (m[1] === "-" ? -1 : 1) : null;
}
const notionYear = s => { const m = (s || "").match(/(\d{4})/); return m ? Number(m[1]) : null; };
// Notionの制作年とWikidataの制作年が両方あって食い違う（±5年超）なら別作品とみなす
function yearConflict(row, e) {
  const a = notionYear(row.year), b = inceptionYear(e);
  return a !== null && b !== null && Math.abs(a - b) > 5;
}

// 所蔵館の照合: Notionの「所蔵」と Wikidata の所蔵館(P195)ラベルが噛み合わなければ別バージョンとみなす
const normMuseum = s => (s || "").toLowerCase()
  .replace(/[（(].*?[)）]/g, "")
  .replace(/美術館|博物館|絵画館|国立|市立|王立|ギャラリー|コレクション|museum|gallery|of|the|art|arts|national|royal|collection|fine|\s|・|,|\.|-/g, "");
async function museumConflict(row, e) {
  const target = normMuseum(row.museum);
  const ids = claimIds(e, "P195");
  if (!target || target.length < 2 || !ids.length) return false;
  for (const id of ids) {
    const m = await getEntity(id);
    const labels = Object.values(m?.labels || {}).map(l => normMuseum(l.value)).filter(Boolean);
    if (labels.some(l => l.includes(target) || target.includes(l))) return false;
  }
  return true; // 所蔵館が1つも一致しない
}

// 作品項目として妥当か: 人物でない・制作者(P170)あり・画像(P18)あり
function artworkImage(e, artistIds) {
  if (!e) return null;
  const types = claimIds(e, "P31");
  if (types.includes("Q5")) return null;                 // 人物（作家ページ）は不採用
  const creators = claimIds(e, "P170");
  if (!creators.length) return null;                     // 制作者なし＝作品でない可能性
  if (artistIds.length && !creators.some(c => artistIds.includes(c))) return null; // 作家が一致しない
  const files = claimStr(e, "P18");
  const file = files.find(f => /\.(jpe?g|png)$/i.test(f));
  if (!file) return null;
  return { file, creatorMatched: artistIds.length > 0 };
}

// Commonsファイル名 → 直リンク（原寸）と1280pxサムネ
function commonsUrls(file) {
  const name = file.replace(/ /g, "_");
  const h = createHash("md5").update(name).digest("hex");
  const enc = encodeURIComponent(name);
  const base = `https://upload.wikimedia.org/wikipedia/commons/${h[0]}/${h.slice(0, 2)}/${enc}`;
  const thumb = `https://upload.wikimedia.org/wikipedia/commons/thumb/${h[0]}/${h.slice(0, 2)}/${enc}/1280px-${enc}`;
  return { base, thumb };
}

async function headOk(url) {
  try {
    const res = await fetch(url, { method: "HEAD", headers: { "User-Agent": UA } });
    return res.ok;
  } catch { return false; }
}

async function resolve(row) {
  const artistIds = await artistQids(row.artist);
  // ルートA: wiki記事 → QID
  if (row.wiki) {
    const qid = await qidFromWiki(row.wiki).catch(() => null);
    if (qid) {
      const e = await getEntity(qid);
      const hit = artworkImage(e, artistIds);
      if (hit && !yearConflict(row, e) && !(await museumConflict(row, e))) return { ...hit, route: "wiki", qid };
    }
  }
  // ルートB: 原題／名前で検索（作家一致が必須）
  if (!artistIds.length) return null;
  // 同名作品（自画像・ピエタ・聖母子など）が多いので、候補を全部集めてから絞る:
  //   制作年が分かれば一致するものだけ残す → それでも候補が1つに絞れなければ見送り
  const queries = [["en", row.original], ["ja", row.title]].filter(([, q]) => q);
  const cands = new Map();
  for (const [lang, q] of queries) {
    const data = await getJson(`https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(q)}&language=${lang}&type=item&limit=20&format=json`);
    for (const s of data.search || []) {
      if (cands.has(s.id)) continue;
      const e = await getEntity(s.id);
      const hit = artworkImage(e, artistIds);
      if (hit && hit.creatorMatched) cands.set(s.id, { e, hit, lang });
    }
    await sleep(200);
  }
  let list = [];
  for (const [id, c] of cands) if (!(await museumConflict(row, c.e))) list.push([id, c]);
  const ny = notionYear(row.year);
  if (ny !== null) {
    const byYear = list.filter(([, c]) => { const y = inceptionYear(c.e); return y !== null && Math.abs(y - ny) <= 5; });
    if (byYear.length) list = byYear;
    else if (list.some(([, c]) => inceptionYear(c.e) !== null)) return null; // 年が分かるのに一致なし＝別作品
  }
  if (list.length !== 1) return null; // 候補が複数＝どれか確定できないので見送り
  const [qid, c] = list[0];
  return { ...c.hit, route: `search-${c.lang}`, qid };
}

// ---------- main ----------
if (TEST) {
  const [artist, title, original, wiki, year, museum] = TEST.split("|");
  const hit = await resolve({ artist, title, original: original || "", wiki: wiki || "", year: year || "", museum: museum || "" });
  console.log(hit ? { ...hit, ...commonsUrls(hit.file) } : "見送り（作品項目が確定できず）");
  process.exit(0);
}
const targets = await fetchTargets();
console.log(`対象（画像URL未付与・PD=可）: ${targets.length} 件 / 今回の上限 ${LIMIT} 件${DRY ? "（dry-run）" : ""}`);

let done = 0, miss = 0, scanned = 0;
const missed = [];
for (const row of targets) {
  if (done >= LIMIT || scanned >= SCAN) break;
  scanned++;
  let hit = null;
  try { hit = await resolve(row); } catch (e) { console.warn(`  ! ${row.title}: ${e.message}`); }
  if (!hit) { miss++; missed.push(`${row.artist}《${row.title}》`); continue; }

  const { base, thumb } = commonsUrls(hit.file);
  if (!(await headOk(base))) { miss++; missed.push(`${row.artist}《${row.title}》(URL不達)`); continue; }

  const note = `Wikimedia Commons／パブリックドメイン（File:${hit.file}）`;
  let license = row.license;
  if (!license) license = note;
  else if (!/Commons/i.test(license)) license = `${license}／${note}`;
  if (row.oldImage && !/wikipedia\.org|wikimedia\.org/.test(row.oldImage)) license += `／参考: ${row.oldImage}`;

  console.log(`  ✓ ${row.artist}《${row.title}》 ← ${hit.file} [${hit.route}${hit.creatorMatched ? "・作家一致" : ""}]`);
  if (!DRY) {
    await notion(`/pages/${row.id}`, {
      properties: {
        "PD画像URL": { url: base },
        "出典・ライセンス": { rich_text: [{ text: { content: license.slice(0, 1900) } }] }
      },
      cover: { type: "external", external: { url: thumb } }
    }, "PATCH");
    await sleep(350);
  }
  done++;
}

console.log(`完了: 付与 ${done} 件 / 見送り ${miss} 件（調べた ${scanned} 件・残り対象 ${targets.length - done} 件）`);
if (missed.length) console.log("見送り:", missed.slice(0, 30).join(" / ") + (missed.length > 30 ? " …" : ""));
