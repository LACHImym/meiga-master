// ============================================================
// 名画MASTER 出題データ自動生成
// Notion「DB作品リスト」から、クイズ対象の新作を works.js に追記する。
// 既存作品のレベル・解説（手でキュレーション済み）はそのまま保持する。
// GitHub Actions から毎日実行される。要 環境変数 NOTION_TOKEN。
// ============================================================
import { readFileSync, writeFileSync } from "node:fs";

const TOKEN = process.env.NOTION_TOKEN;
const DB_ID = "142ffcba-f9f0-80ae-8e36-cab4961ccafb"; // DB作品リスト
const DEFAULT_LEVEL = 2; // 新作の暫定レベル（Wikidataで判定できないときの既定）
// 知名度の目安 = Wikipedia記事のある言語数（Wikidata sitelinks）。
// 例: モナ・リザ 150超／真珠の耳飾りの少女 約90／ひわ 約30／テンダの聖母 約10
const LEVEL_RULE = [[45, 1], [15, 2]]; // [この言語数以上, レベル]。それ未満は3
const UA = "meiga-master-generator/1.0 (https://lachiart.com/quiz/meiga/; mym.lachi@gmail.com)";
// 1回に足す新作の上限（毎日5作品ずつ増やす運用。環境変数 ADD_LIMIT で変更可・0=無制限）
const ADD_LIMIT = process.env.ADD_LIMIT === undefined ? 5 : Number(process.env.ADD_LIMIT);

if (!TOKEN) { console.error("NOTION_TOKEN が未設定です"); process.exit(1); }

// Notionプロパティ → 素の値（型に依存せず取り出す）
function plain(prop) {
  if (!prop) return "";
  switch (prop.type) {
    case "title":
    case "rich_text":
      return (prop[prop.type] || []).map(t => t.plain_text).join("");
    case "select": return prop.select ? prop.select.name : "";
    case "multi_select": return (prop.multi_select || []).map(o => o.name);
    case "url": return prop.url || "";
    case "number": return prop.number ?? "";
    default: return "";
  }
}

async function queryAll() {
  const rows = [];
  let cursor;
  do {
    const res = await fetch(`https://api.notion.com/v1/databases/${DB_ID}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cursor ? { start_cursor: cursor, page_size: 100 } : { page_size: 100 })
    });
    if (!res.ok) throw new Error(`Notion API ${res.status}: ${await res.text()}`);
    const data = await res.json();
    rows.push(...data.results);
    cursor = data.has_more ? data.next_cursor : null;
  } while (cursor);
  return rows;
}

// 出典欄に resolve-images.mjs が残した「Wikidata:Q…」からレベルを推定
async function levelFor(licenseText) {
  const m = (licenseText || "").match(/Wikidata:(Q\d+)/);
  if (!m) return DEFAULT_LEVEL;
  try {
    const res = await fetch(`https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${m[1]}&props=sitelinks&format=json`,
      { headers: { "User-Agent": UA } });
    if (!res.ok) return DEFAULT_LEVEL;
    const data = await res.json();
    const links = Object.keys(data.entities?.[m[1]]?.sitelinks || {}).filter(k => k.endsWith("wiki") && k !== "commonswiki").length;
    for (const [min, lv] of LEVEL_RULE) if (links >= min) return lv;
    return 3;
  } catch { return DEFAULT_LEVEL; }
}

// 既存 works.js を読み込み（レベル・解説を保持するため）
const existingText = readFileSync("works.js", "utf8");
const EXISTING = new Function(existingText + "\n; return WORKS;")();
const existingTitles = new Set(EXISTING.map(w => w.title));

const rows = await queryAll();
const added = [];
const candidates = [];
for (const row of rows) {
  const p = row.properties || {};
  const title = plain(p["名前"]);
  const artist = plain(p["作家名"]);
  const image = plain(p["PD画像URL"]);
  const pd = plain(p["PD"]);
  // クイズ対象の条件: PD=可 / 画像がWikimedia直リンク / 作家名・タイトルあり
  if (!title || !artist) continue;
  if (pd !== "可") continue;
  if (!/^https:\/\/upload\.wikimedia\.org\//.test(image)) continue;
  if (existingTitles.has(title)) continue; // 既存はそのまま（キュレーション保持）
  const themes = plain(p["テーマ"]);
  candidates.push({
    title, artist,
    year: plain(p["制作年"]),
    museum: plain(p["所蔵"]),
    themes: Array.isArray(themes) ? themes : (themes ? [themes] : []),
    summary: plain(p["概要"]),
    image,
    level: DEFAULT_LEVEL,
    _license: plain(p["出典・ライセンス"])
  });
  existingTitles.add(title);
}
// 上限まで（Notionの返却順＝作成が古い順）。残りは翌日以降に持ち越す
added.push(...(ADD_LIMIT > 0 ? candidates.slice(0, ADD_LIMIT) : candidates));
for (const w of added) { w.level = await levelFor(w._license); delete w._license; }

if (added.length === 0) {
  console.log(`完了: 新作なし（全 ${EXISTING.length} 作品）。works.js は変更しません。`);
  process.exit(0);
}

const merged = EXISTING.concat(added);

// 安全検証: 減っていない・必須項目あり・全件が有効なCommons画像
if (merged.length < EXISTING.length) { console.error("作品数が減少。中止"); process.exit(1); }
for (const w of merged) {
  if (!w.title || !w.artist || !w.level ||
      !/^https:\/\/upload\.wikimedia\.org\//.test(w.image)) {
    console.error("不正な作品データ。中止: " + JSON.stringify(w).slice(0, 120));
    process.exit(1);
  }
}

const date = (process.env.RUN_DATE || new Date().toISOString()).slice(0, 10);
const header = `// ============================================================
// 名画MASTER 出題データ（Notion「DB作品リスト」から自動生成）
// 既存作品のレベル・解説は保持し、新作を追記します。手動編集は次回自動更新で上書きされます。
// 最終更新: ${date}（全${merged.length}作品／今回の新規 ${added.length}）
// ============================================================
`;
writeFileSync("works.js", header + "\nconst WORKS = " + JSON.stringify(merged, null, 2) + ";\n");

console.log(`完了: 全 ${merged.length} 作品（新規 ${added.length}／持ち越し ${candidates.length - added.length}）`);
if (added.length) console.log("新規追加:", added.map(w => `${w.title}(Lv${w.level})`).join(" / "));
