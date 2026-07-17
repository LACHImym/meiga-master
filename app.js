// ============================================================
// アートクイズ 本体ロジック
// 5問 × 20点 = 100点満点 / 作者当て・タイトル当ての4択
// ============================================================

const QUESTIONS_PER_ROUND = 5;
const POINTS_PER_QUESTION = 20;

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
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function eraOf(work) {
  for (const t of work.themes) {
    if (ERA_MAP[t]) return ERA_MAP[t];
  }
  return "m19";
}

// Wikimedia Commonsの縮小版URLを作る（読み込みを軽くする）
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

// ---------- 出題の組み立て ----------
function buildRound() {
  // 出題は選択中の難易度の作品だけから
  const pool = WORKS.filter(w => w.level === currentLevel);
  // 同じ作家に偏らないよう、作家単位でシャッフルして1人1作品ずつ選ぶ
  const byArtist = {};
  for (const w of pool) (byArtist[w.artist] ??= []).push(w);
  const artists = shuffle(Object.keys(byArtist));
  const picked = artists.slice(0, QUESTIONS_PER_ROUND)
    .map(a => shuffle(byArtist[a])[0]);

  // ハズレ選択肢は難易度に関係なく全作品・全作家から選ぶ
  const allByArtist = {};
  for (const w of WORKS) (allByArtist[w.artist] ??= []).push(w);
  const datasetArtists = Object.keys(allByArtist).filter(a => a !== "不詳");

  return picked.map(work => {
    const era = eraOf(work);
    // 作者不詳の作品はタイトル当てのみ。それ以外はランダムに出し分け
    const type = work.artist === "不詳" ? "title"
      : Math.random() < 0.5 ? "artist" : "title";

    let choices;
    if (type === "artist") {
      const sameEra = datasetArtists.filter(a =>
        a !== work.artist && allByArtist[a].some(w => eraOf(w) === era));
      const pool = shuffle([...new Set([...sameEra, ...EXTRA_ARTISTS[era]])])
        .filter(a => a !== work.artist);
      // 足りなければ他の時代からも補充
      const backup = shuffle(datasetArtists.filter(a => a !== work.artist && !pool.includes(a)));
      choices = shuffle([work.artist, ...[...pool, ...backup].slice(0, 3)]);
    } else {
      const sameEra = WORKS.filter(w =>
        w.artist !== work.artist && eraOf(w) === era && !tooSimilar(w.title, work.title));
      const others = WORKS.filter(w =>
        w.artist !== work.artist && eraOf(w) !== era && !tooSimilar(w.title, work.title));
      const pool = [...shuffle(sameEra), ...shuffle(others)]
        .map(w => w.title);
      const uniq = [...new Set(pool)];
      choices = shuffle([work.title, ...uniq.slice(0, 3)]);
    }

    return {
      work,
      type,
      question: type === "artist" ? "この作品の作者は？" : "この作品のタイトルは？",
      answer: type === "artist" ? work.artist : work.title,
      choices
    };
  });
}

// ---------- 画面制御 ----------
const $ = id => document.getElementById(id);
let round = [];
let current = 0;
let results = []; // true/false

function startRound() {
  round = buildRound();
  current = 0;
  results = [];
  $("result-screen").hidden = true;
  $("loading-screen").hidden = true;
  $("quiz-screen").hidden = false;
  showQuestion();
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
  $("q-counter").textContent = `第${current + 1}問 / ${QUESTIONS_PER_ROUND}`;
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

function showResult() {
  const correctCount = results.filter(Boolean).length;
  const score = correctCount * POINTS_PER_QUESTION;
  $("quiz-screen").hidden = true;
  $("result-screen").hidden = false;
  $("score-num").textContent = score;
  $("result-sub").textContent = `${QUESTIONS_PER_ROUND}問中${correctCount}問正解`;
  $("result-message").textContent =
    RESULT_MESSAGES.find(m => score >= m.min).msg;

  // スコアダイヤルの円弧（円周 = 2πr, r=110）を得点率ぶんだけ伸ばす
  const arc = $("score-arc");
  const circumference = 2 * Math.PI * 110;
  arc.style.strokeDasharray = circumference;
  arc.style.strokeDashoffset = circumference;
  arc.getBoundingClientRect(); // 一度レイアウトを確定させ、0%→得点率へCSS遷移で伸ばす
  arc.style.strokeDashoffset = circumference * (1 - score / 100);

  const text = `🎨名画MASTER Level ${currentLevel}で${score}点（100点満点）でした！あなたも名画に挑戦してみて✨ #名画MASTER`;
  const url = location.origin.startsWith("http")
    ? location.origin + location.pathname : "";
  $("share-btn").href =
    "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) +
    (url ? "&url=" + encodeURIComponent(url) : "");

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

$("next-btn").onclick = () => {
  current++;
  if (current < QUESTIONS_PER_ROUND) showQuestion();
  else showResult();
};
$("retry-btn").onclick = startRound;

// レベルボタン（データにあるレベルぶんだけ自動生成）
function renderLevelButtons() {
  const row = $("level-row");
  row.innerHTML = "";
  LEVEL_NUMS.forEach(n => {
    const b = document.createElement("button");
    b.className = "level-btn" + (n === currentLevel ? " active" : "");
    b.innerHTML =
      `<span class="lv-label">LEVEL ${n}</span>` +
      `<span class="lv-stars">${"★".repeat(n)}</span>`;
    b.onclick = () => {
      currentLevel = n;
      localStorage.setItem("artQuizLevel", n);
      renderLevelButtons();
      startRound();
    };
    row.appendChild(b);
  });
}

const lvCount = l => WORKS.filter(w => w.level === l).length;
$("pool-info").textContent =
  `出題プール: ${WORKS.length}作品（` +
  LEVEL_NUMS.map(n => `Level ${n}: ${lvCount(n)}`).join("・") + "）";
renderLevelButtons();
startRound();
