// ============================================================
// 名画MASTER 本体ロジック
// ・今日の名画検定（毎日0時更新・全員共通の5問・連続記録🔥）
// ・練習モード（Level別・何度でも）
// ・きろく（過去の成績・マスター作品数）… ブラウザ保存(localStorage)
// ============================================================

const QUESTIONS_PER_ROUND = 5;
const POINTS_PER_QUESTION = 20;
const DAILY_EPOCH = "2026-07-19"; // この日が「今日の名画検定 #1」

// レベルは出題データから自動検出（works.jsにlevel:4の作品を足せばボタンも自動で増える）
const LEVEL_NUMS = [...new Set(WORKS.map(w => w.level))].sort((a, b) => a - b);
let currentLevel = Number(localStorage.getItem("artQuizLevel"));
if (!LEVEL_NUMS.includes(currentLevel)) currentLevel = LEVEL_NUMS[0];

// テーマ → 時代グループ（ハズレ選択肢を「それっぽく」するための分類）
const ERA_MAP = {
  "ルネサンス": "classic", "北方ルネサンス": "classic", "バロック": "classic",
  "新古典主義": "classic", "古代・中世": "classic", "彫刻": "classic",
  "ロマン主義": "m19", "写実主義": "m19", "ラファエル前派": "m19",
  "象徴主義": "m19", "ポスト印象派": "m19", "印象派": "m19", "浮世絵": "m19",
  "キュビスム": "avant", "抽象・シュプレマティスム": "avant",
  "デ・ステイル": "avant", "表現主義": "avant",
  "日本画・江戸絵画": "m19"
};

// データにいない作家も混ぜて選択肢を豊かにする（時代グループ別）
const EXTRA_ARTISTS = {
  classic: ["ラファエロ・サンティ", "サンドロ・ボッティチェリ", "ティツィアーノ・ヴェチェッリオ",
    "アルブレヒト・デューラー", "カラヴァッジオ", "ディエゴ・ベラスケス",
    "ピーテル・パウル・ルーベンス", "エル・グレコ", "ジャック＝ルイ・ダヴィッド"],
  m19: ["クロード・モネ", "エドゥアール・マネ", "ギュスターヴ・クールベ",
    "ジャン＝フランソワ・ミレー", "ポール・ゴーギャン", "ポール・セザンヌ",
    "エドガー・ドガ", "テオドール・ジェリコー", "ジョン・エヴァレット・ミレイ",
    "グスタフ・クリムト", "エドヴァルド・ムンク", "歌川広重", "喜多川歌麿"],
  avant: ["パブロ・ピカソ", "ジョルジュ・ブラック", "フェルナン・レジェ",
    "パウル・クレー", "フランツ・マルク", "エル・リシツキー",
    "テオ・ファン・ドゥースブルフ", "ウンベルト・ボッチョーニ", "ジョアン・ミロ"]
};

const RESULT_MESSAGES = [
  { min: 100, msg: "パーフェクト！あなたは真のアートマスター🏆" },
  { min: 80, msg: "素晴らしい！美術館デートで頼られるレベル✨" },
  { min: 60, msg: "いい線いってます！名画との距離が縮まってきた🖼️" },
  { min: 40, msg: "のびしろたっぷり！解説を読めばもう常連さん📖" },
  { min: 0, msg: "ここからがスタート！名画との出会いを楽しんで🎨" }
];

// ---------- ユーティリティ ----------
// シード付き乱数（日付から作る＝同じ日は全員同じ問題になる）
function seededRng(seedStr) {
  let h = 1779033703 ^ seedStr.length;
  for (let i = 0; i < seedStr.length; i++) {
    h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

function shuffle(arr, rnd = Math.random) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function todayStr(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const p = n => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function dayNumber(dateStr) {
  const diff = Math.round((new Date(dateStr) - new Date(DAILY_EPOCH)) / 86400000);
  return Math.max(1, diff + 1);
}

function eraOf(work) {
  for (const t of work.themes) {
    if (ERA_MAP[t]) return ERA_MAP[t];
  }
  return "m19";
}

// Wikimedia Commonsの縮小版URLを作る（許可サイズ: 250/330/500/960/1280のみ）
function thumbUrl(url, width) {
  const m = url.match(/^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/(.)\/(..)\/(.+)$/);
  if (!m) return url;
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${m[1]}/${m[2]}/${m[3]}/${width}px-${m[3]}`;
}

// タイトル同士が紛らわしすぎるかどうか（例:「コンポジションⅦ」と「コンポジションⅧ」）
function tooSimilar(a, b) {
  if (a.includes(b) || b.includes(a)) return true;
  return a.slice(0, 4) === b.slice(0, 4);
}

// ---------- きろく（localStorage） ----------
const store = {
  get(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch (e) { return fallback; }
  },
  set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }
};
// mmDaily: { last: "YYYY-MM-DD", streak: n, best: n, results: { "YYYY-MM-DD": {score, num} } }
// mmLog:   [ { d, mode: "daily"|"practice", level, score } ]  最新200件
// mmMastered: [ 正解したことのある作品タイトル ]

function currentStreak() {
  const daily = store.get("mmDaily", {});
  if (!daily.last) return 0;
  if (daily.last === todayStr() || daily.last === todayStr(-1)) return daily.streak || 0;
  return 0; // 2日以上あいたら途切れ
}

// ---------- 出題の組み立て ----------
function makeQuestion(work, rnd) {
  const era = eraOf(work);
  // 作者不詳の作品はタイトル当てのみ。それ以外はランダムに出し分け
  const type = work.artist === "不詳" ? "title"
    : rnd() < 0.5 ? "artist" : "title";

  const allByArtist = {};
  for (const w of WORKS) (allByArtist[w.artist] ??= []).push(w);
  const datasetArtists = Object.keys(allByArtist).filter(a => a !== "不詳");

  let choices;
  if (type === "artist") {
    const sameEra = datasetArtists.filter(a =>
      a !== work.artist && allByArtist[a].some(w => eraOf(w) === era));
    const pool = shuffle([...new Set([...sameEra, ...EXTRA_ARTISTS[era]])], rnd)
      .filter(a => a !== work.artist);
    // 足りなければ他の時代からも補充
    const backup = shuffle(datasetArtists.filter(a => a !== work.artist && !pool.includes(a)), rnd);
    choices = shuffle([work.artist, ...[...pool, ...backup].slice(0, 3)], rnd);
  } else {
    const sameEra = WORKS.filter(w =>
      w.artist !== work.artist && eraOf(w) === era && !tooSimilar(w.title, work.title));
    const others = WORKS.filter(w =>
      w.artist !== work.artist && eraOf(w) !== era && !tooSimilar(w.title, work.title));
    const pool = [...shuffle(sameEra, rnd), ...shuffle(others, rnd)].map(w => w.title);
    const uniq = [...new Set(pool)];
    choices = shuffle([work.title, ...uniq.slice(0, 3)], rnd);
  }

  return {
    work,
    type,
    question: type === "artist" ? "この作品の作者は？" : "この作品のタイトルは？",
    answer: type === "artist" ? work.artist : work.title,
    choices
  };
}

// レベル別問題: そのレベルの全作品から5問（作家の偏りを防ぐ）
// 出題プール(WORKS)は「クイズのデータを更新して」で新作品が足されるたびに増える＝コツコツ成長
function buildPracticeRound() {
  const pool = WORKS.filter(w => w.level === currentLevel);
  const byArtist = {};
  for (const w of pool) (byArtist[w.artist] ??= []).push(w);
  const artists = shuffle(Object.keys(byArtist));
  let picked = artists.slice(0, QUESTIONS_PER_ROUND).map(a => shuffle(byArtist[a])[0]);
  if (picked.length < QUESTIONS_PER_ROUND) {
    const more = shuffle(pool.filter(w => !picked.includes(w)));
    picked = picked.concat(more.slice(0, QUESTIONS_PER_ROUND - picked.length));
  }
  return picked.map(w => makeQuestion(w, Math.random));
}

// 今日の名画検定 #N: 日付シードで全員共通の5問（易2・中2・難1の順）。
// プールが増えれば毎日の顔ぶれも自然に新しくなる。
function buildDailyRound(dateStr) {
  const rnd = seededRng("meiga-" + dateStr);
  const picked = [];
  const usedArtists = new Set();
  [[1, 2], [2, 2], [3, 1]].forEach(([lv, count]) => {
    const pool = shuffle(WORKS.filter(w => w.level === lv), rnd);
    let taken = 0;
    for (const w of pool) {
      if (taken >= count) break;
      if (usedArtists.has(w.artist) && w.artist !== "不詳") continue;
      usedArtists.add(w.artist);
      picked.push(w);
      taken++;
    }
  });
  return picked.map(w => makeQuestion(w, rnd));
}

// ---------- 画面制御 ----------
const $ = id => document.getElementById(id);
let mode = "practice"; // "practice" | "daily"
let round = [];
let current = 0;
let results = []; // true/false

function startRound(newMode) {
  mode = newMode || "practice";
  if (mode === "daily") {
    const played = store.get("mmDaily", {}).results?.[todayStr()];
    if (played) { setView("records"); return; } // 挑戦済みならきろくへ
    round = buildDailyRound(todayStr());
  } else {
    round = buildPracticeRound();
  }
  current = 0;
  results = [];
  setView("quiz");
  showQuestion();
}

// 画面の切り替え（home=カードとレベル選択 / quiz=出題に集中 / result / records）
function setView(view) {
  document.querySelector(".top-tabs").hidden = view === "quiz"; // 出題中は上部もすっきり
  $("home-menu").hidden = view !== "home";
  $("quiz-screen").hidden = view !== "quiz";
  $("result-screen").hidden = view !== "result";
  $("records-screen").hidden = view !== "records";
  $("loading-screen").hidden = true;
  $("tab-play").classList.toggle("active", view !== "records");
  $("tab-records").classList.toggle("active", view === "records");
  if (view === "home") renderDailyCard();
  if (view === "records") renderRecords();
  window.scrollTo({ top: 0 });
}

// 進行ドット（正解=ティール / 不正解=アンバー / 現在=raised / 未回答=inset）
function renderDots() {
  const box = $("score-dots");
  box.innerHTML = "";
  for (let i = 0; i < QUESTIONS_PER_ROUND; i++) {
    const d = document.createElement("span");
    d.className = "dot" +
      (i < results.length ? (results[i] ? " ok" : " ng")
        : i === results.length ? " current" : "");
    d.textContent = i + 1;
    box.appendChild(d);
  }
}

function showQuestion() {
  const q = round[current];
  const prefix = mode === "daily" ? `今日の #${dayNumber(todayStr())}・` : "";
  $("q-counter").textContent = `${prefix}第${current + 1}問 / ${QUESTIONS_PER_ROUND}`;
  renderDots();

  const img = $("art-image");
  img.src = thumbUrl(q.work.image, 960);
  img.onerror = () => { img.onerror = null; img.src = q.work.image; };
  img.alt = "出題作品の画像";

  $("question-text").textContent = q.question;
  $("feedback").hidden = true;

  const box = $("choices");
  box.innerHTML = "";
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice;
    btn.onclick = () => answer(btn, choice);
    box.appendChild(btn);
  });

  // 次の問題の画像を先読みしておく
  if (round[current + 1]) {
    new Image().src = thumbUrl(round[current + 1].work.image, 960);
  }
}

function answer(btn, choice) {
  const q = round[current];
  const correct = choice === q.answer;
  results.push(correct);

  document.querySelectorAll(".choice-btn").forEach(b => {
    b.disabled = true;
    if (b.textContent === q.answer) b.classList.add("correct");
    else if (b === btn && !correct) b.classList.add("wrong");
  });

  const head = $("feedback-head");
  head.textContent = correct ? "○ 正解！" : "× 残念…正解は「" + q.answer + "」";
  head.className = correct ? "ok" : "ng";

  $("work-caption").textContent =
    `《${q.work.title}》 ${q.work.artist}（${q.work.year}）｜${q.work.museum}`;
  $("work-summary").textContent = q.work.summary || "";

  $("next-btn").textContent =
    current === QUESTIONS_PER_ROUND - 1 ? "結果を見る 🎉" : "次の問題へ ▶";
  $("feedback").hidden = false;
  $("feedback").scrollIntoView({ behavior: "smooth", block: "nearest" });

  renderDots();
}

// きろくへの保存（1ラウンド終了時）
function saveRoundRecord(score) {
  // プレイ履歴
  const log = store.get("mmLog", []);
  log.unshift({ d: todayStr(), mode, level: mode === "practice" ? currentLevel : null, score });
  store.set("mmLog", log.slice(0, 200));

  // マスター作品（一度でも正解した作品）
  const mastered = new Set(store.get("mmMastered", []));
  round.forEach((q, i) => { if (results[i]) mastered.add(q.work.title); });
  store.set("mmMastered", [...mastered]);

  // 1問ごとの履歴（新しい順・最大50問）
  const entries = round.map((q, i) => ({ t: q.work.title, type: q.type, ok: !!results[i] }));
  store.set("mmQuestions",
    [...entries.reverse(), ...store.get("mmQuestions", [])].slice(0, 50));

  // デイリーの記録と連続日数
  if (mode === "daily") {
    const daily = store.get("mmDaily", { results: {} });
    daily.results = daily.results || {};
    if (!daily.results[todayStr()]) {
      daily.results[todayStr()] = { score, num: dayNumber(todayStr()) };
      daily.streak = (daily.last === todayStr(-1)) ? (daily.streak || 0) + 1 : 1;
      daily.best = Math.max(daily.best || 0, daily.streak);
      daily.last = todayStr();
      store.set("mmDaily", daily);
    }
  }
}

function showResult() {
  const correctCount = results.filter(Boolean).length;
  const score = correctCount * POINTS_PER_QUESTION;
  saveRoundRecord(score);
  renderDailyCard();

  setView("result");
  $("score-num").textContent = score;
  $("result-sub").textContent = mode === "daily"
    ? `今日の名画検定 #${dayNumber(todayStr())}`
    : `${QUESTIONS_PER_ROUND}問中${correctCount}問正解`;
  $("result-message").textContent =
    RESULT_MESSAGES.find(m => score >= m.min).msg;

  // スコアダイヤルの円弧（円周 = 2πr, r=110）を得点率ぶんだけ伸ばす
  const arc = $("score-arc");
  const circumference = 2 * Math.PI * 110;
  arc.style.strokeDasharray = circumference;
  arc.style.strokeDashoffset = circumference;
  arc.getBoundingClientRect(); // 一度レイアウトを確定させ、0%→得点率へCSS遷移で伸ばす
  arc.style.strokeDashoffset = circumference * (1 - score / 100);

  const streak = currentStreak();
  const text = mode === "daily"
    ? `🎨名画検定 #${dayNumber(todayStr())} ${score}点${streak >= 2 ? ` 🔥${streak}日連続` : ""} #名画MASTER`
    : `🎨名画MASTER Level ${currentLevel}で${score}点（100点満点）でした！あなたも名画に挑戦してみて✨ #名画MASTER`;
  const url = location.origin.startsWith("http")
    ? location.origin + location.pathname : "";
  $("share-btn").href =
    "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) +
    (url ? "&url=" + encodeURIComponent(url) : "");

  // デイリー完走メッセージ（デイリーは1日1回なので再挑戦ボタンは練習へ誘導）
  $("daily-done-note").hidden = mode !== "daily";
  $("retry-btn").textContent = mode === "daily" ? "レベル別問題であそぶ" : "もう一度挑戦";
  if (mode === "daily") {
    $("daily-done-note").textContent =
      `🔥${streak}日連続！ 明日の0時に #${dayNumber(todayStr()) + 1} が届きます`;
  }

  const list = $("recap-list");
  list.innerHTML = "";
  round.forEach((q, i) => {
    const li = document.createElement("li");
    const num = document.createElement("span");
    num.className = "recap-num";
    num.textContent = i + 1;
    const img = document.createElement("img");
    img.src = thumbUrl(q.work.image, 250);
    img.onerror = () => { img.onerror = null; img.src = q.work.image; };
    img.alt = q.work.title;
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.innerHTML = `<strong>《${q.work.title}》</strong><span>${q.work.artist}（${q.work.year}）</span>`;
    const mark = document.createElement("span");
    mark.className = "recap-mark " + (results[i] ? "ok" : "ng");
    mark.textContent = results[i] ? "○" : "×";
    li.append(num, img, meta, mark);
    list.appendChild(li);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------- 今日の名画検定カード ----------
function renderDailyCard() {
  const num = dayNumber(todayStr());
  const played = store.get("mmDaily", {}).results?.[todayStr()];
  const streak = currentStreak();
  $("daily-num").textContent = `#${num}`;
  const md = todayStr().slice(5).replace("-", "/");
  if (played) {
    $("daily-sub").textContent = `✓ 挑戦済み ${played.score}点` +
      (streak >= 1 ? `・🔥${streak}日連続` : "");
    $("daily-status").textContent = "きろくを見る →";
  } else {
    $("daily-sub").textContent = `${md}の5問・全員共通・毎日0時に更新` +
      (streak >= 1 ? `・🔥${streak}日連続中` : "");
    $("daily-status").textContent = "挑戦する →";
  }
}

// ---------- きろく画面 ----------
function renderRecords() {
  const daily = store.get("mmDaily", { results: {} });
  const log = store.get("mmLog", []);
  const mastered = store.get("mmMastered", []);

  $("rec-streak").textContent = currentStreak();
  $("rec-best").textContent = daily.best || 0;
  $("rec-plays").textContent = log.length;
  $("rec-avg").textContent = log.length
    ? Math.round(log.reduce((s, e) => s + e.score, 0) / log.length) : 0;

  $("rec-mastered-num").textContent = `${mastered.length} / ${WORKS.length}`;
  $("rec-mastered-bar").style.width =
    Math.min(100, Math.round(mastered.length / WORKS.length * 100)) + "%";

  // 直近にあそんだ問題（新しい順に10問・作品画像と○×つき）
  const ql = $("rec-questions-list");
  ql.innerHTML = "";
  const qs = store.get("mmQuestions", []).slice(0, 10);
  if (!qs.length) {
    ql.innerHTML = '<li class="rec-empty">まだ問題をあそんでいません</li>';
  }
  qs.forEach(e => {
    const w = WORKS.find(x => x.title === e.t);
    if (!w) return; // データ更新で作品名が変わった場合はスキップ
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = thumbUrl(w.image, 250);
    img.onerror = () => { img.onerror = null; img.src = w.image; };
    img.alt = w.title;
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.innerHTML = `<strong>《${w.title}》</strong>` +
      `<span>${w.artist}・${e.type === "artist" ? "作者あて" : "タイトルあて"}</span>`;
    const mark = document.createElement("span");
    mark.className = "recap-mark " + (e.ok ? "ok" : "ng");
    mark.textContent = e.ok ? "○" : "×";
    li.append(img, meta, mark);
    ql.appendChild(li);
  });

  // デイリー履歴（新しい順に14件）
  const dl = $("rec-daily-list");
  dl.innerHTML = "";
  const dailyEntries = Object.entries(daily.results || {})
    .sort((a, b) => b[0].localeCompare(a[0])).slice(0, 14);
  if (!dailyEntries.length) {
    dl.innerHTML = '<li class="rec-empty">まだ挑戦していません。今日の名画検定からどうぞ！</li>';
  }
  dailyEntries.forEach(([date, r]) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="rec-tag">#${r.num}</span><span>${date.slice(5).replace("-", "/")}</span><strong>${r.score}点</strong>`;
    dl.appendChild(li);
  });

  // 練習履歴（新しい順に10件）
  const pl = $("rec-practice-list");
  pl.innerHTML = "";
  const practice = log.filter(e => e.mode === "practice").slice(0, 10);
  if (!practice.length) {
    pl.innerHTML = '<li class="rec-empty">まだ記録がありません</li>';
  }
  practice.forEach(e => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="rec-tag">Lv${e.level}</span><span>${e.d.slice(5).replace("-", "/")}</span><strong>${e.score}点</strong>`;
    pl.appendChild(li);
  });
}

// ---------- 初期化 ----------
$("next-btn").onclick = () => {
  current++;
  if (current < QUESTIONS_PER_ROUND) showQuestion();
  else showResult();
};
$("retry-btn").onclick = () => startRound("practice");
$("daily-card").onclick = () => startRound("daily");
$("quiz-home-btn").onclick = () => setView("home");
$("tab-play").onclick = () => setView("home");
$("tab-records").onclick = () => setView("records");

// レベルボタン（データにあるレベルぶんだけ自動生成・各レベルの問題数を表示）
function renderLevelButtons() {
  const row = $("level-row");
  row.innerHTML = "";
  LEVEL_NUMS.forEach(n => {
    const total = WORKS.filter(w => w.level === n).length;
    const b = document.createElement("button");
    b.className = "level-btn" + (n === currentLevel ? " active" : "");
    b.innerHTML =
      `<span class="lv-label">LEVEL ${n}</span>` +
      `<span class="lv-stars">${"★".repeat(n)}</span>` +
      `<span class="lv-count">${total}問</span>`;
    b.onclick = () => {
      currentLevel = n;
      localStorage.setItem("artQuizLevel", n);
      renderLevelButtons();
      startRound("practice");
    };
    row.appendChild(b);
  });

  $("release-note").textContent =
    `現在 ${WORKS.length} 作品 ・ 名画は少しずつ増えていきます`;
}

$("pool-info").textContent =
  `全 ${WORKS.length} 作品（` +
  LEVEL_NUMS.map(n => `Level ${n}: ${WORKS.filter(w => w.level === n).length}`).join("・") + "）";
renderLevelButtons();
setView("home"); // 最初はホーム（今日の名画検定カード＋レベル選択）

// 冒頭の広告を読み込む（常時表示の枠なので初回に1回だけ）
try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}

// 数秒たっても広告が入らなければ枠を畳む（空白で場所を取らないため）
setTimeout(() => {
  const ins = document.querySelector(".ad-top ins.adsbygoogle");
  if (ins && !ins.querySelector("iframe")) {
    document.querySelector(".ad-top").classList.add("ad-empty");
  }
}, 4000);
