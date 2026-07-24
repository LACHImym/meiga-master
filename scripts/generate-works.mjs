// ============================================================
// 名画MASTER 出題データ自動生成
// Notion「DB作品リスト」から、クイズ対象の新作を works.js に追記する。
// 既存作品のレベル・解説（手でキュレーション済み）はそのまま保持する。
// GitHub Actions から毎日実行される。要 環境変数 NOTION_TOKEN。
// ============================================================
import { readFileSync, writeFileSync } from "node:fs";

const TOKEN = process.env.NOTION_TOKEN;
const DB_ID = "142ffcba-f9f0-80ae-8e36-cab4961ccafb"; // DB作品リスト
const DEFAULT_LEVEL = 2; // 新作の暫定レベル（後で見直し可）

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

// 既存 works.js を読み込み（レベル・解説を保持するため）
const existingText = readFileSync("works.js", "utf8");
const EXISTING = new Function(existingText + "\n; return WORKS;")();
const existingTitles = new Set(EXISTING.map(w => w.title));

const rows = await queryAll();
const added = [];
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
  added.push({
    title, artist,
    year: plain(p["制作年"]),
    museum: plain(p["所蔵"]),
    themes: Array.isArray(themes) ? themes : (themes ? [themes] : []),
    summary: plain(p["概要"]),
    image,
    level: DEFAULT_LEVEL
  });
  existingTitles.add(title);
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

console.log(`完了: 全 ${merged.length} 作品（新規 ${added.length}）`);
if (added.length) console.log("新規追加:", added.map(w => w.title).join(" / "));
