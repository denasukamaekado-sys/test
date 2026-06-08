const characters = [
  {
    id: "fox",
    sigil: "狐",
    image: "assets/characters/fox.png",
    name: "影炎のキツネ",
    className: "ルーンメイジ",
    weapon: "魔導スタッフ",
    accent: "rgba(255, 110, 125, 0.34)",
    summary: "直感とひらめきで場を動かす作戦型。見えない勝ち筋を読むのが得意です。",
    traits: ["発想力", "交渉力", "変化対応"],
    details: [
      {
        title: "性格の核",
        text: "あなたは状況の隙間にある可能性を見つけるのが上手です。決まった手順よりも、目の前の空気や相手の反応を見ながら、柔らかく作戦を変えていきます。",
      },
      {
        title: "強みが出る場面",
        text: "新しい企画、トラブル対応、交渉、アイデア出しで力を発揮します。まだ形になっていないものに輪郭を与え、周りを前向きに巻き込めます。",
      },
      {
        title: "つまずきやすい場面",
        text: "細かい確認作業や長く同じ作業を続ける場面では、気持ちが先に次へ向かいやすいタイプです。詰めの段階では相棒やチェックリストを置くと安定します。",
      },
      {
        title: "伸ばし方",
        text: "ひらめいたことを一度メモに落として、優先順位を3つに絞ると武器がさらに鋭くなります。自由さに小さな型を足すのが成長の鍵です。",
      },
    ],
    quest: "今日は思いついた案を一つだけ選び、5分で試せる形にしてみましょう。",
  },
  {
    id: "wolf",
    sigil: "狼",
    image: "assets/characters/wolf.png",
    name: "銀牙のオオカミ",
    className: "フロントナイト",
    weapon: "大剣",
    accent: "rgba(129, 153, 171, 0.32)",
    summary: "仲間を守りながら前へ進む実行型。信頼を積み上げるほど強くなります。",
    traits: ["責任感", "継続力", "チーム力"],
    details: [
      {
        title: "性格の核",
        text: "あなたは約束や信頼を大切にするタイプです。派手に見せるよりも、必要なことを着実に進め、周りが安心して動ける状態を作ります。",
      },
      {
        title: "強みが出る場面",
        text: "チーム作業、長期プロジェクト、誰かを支える役割で強さが出ます。人から任されたことに対して、最後まで責任を持って向き合えます。",
      },
      {
        title: "つまずきやすい場面",
        text: "抱え込みすぎると、自分の疲れに気づくのが遅れます。頼られるほど頑張れる一方で、無理を隠してしまうことがあります。",
      },
      {
        title: "伸ばし方",
        text: "最初に役割と期限を言葉にしておくと、あなたの安定感がより伝わります。助けを求めることもチームを守る行動です。",
      },
    ],
    quest: "今日のタスクを一つだけ誰かに共有し、協力しやすい形に整えてみましょう。",
  },
  {
    id: "owl",
    sigil: "梟",
    image: "assets/characters/owl.png",
    name: "星射ちのフクロウ",
    className: "スカイレンジャー",
    weapon: "ロングボウ",
    accent: "rgba(54, 189, 242, 0.32)",
    summary: "観察してから的確に撃つ分析型。情報整理と冷静な判断で流れを変えます。",
    traits: ["分析力", "集中力", "先読み"],
    details: [
      {
        title: "性格の核",
        text: "あなたはすぐに飛び込むより、まず状況をよく見てから動くタイプです。表面の勢いに流されず、根拠や構造を読み取ろうとします。",
      },
      {
        title: "強みが出る場面",
        text: "調査、比較、計画、文章化、問題の原因探しで力を発揮します。情報が散らかっている場面ほど、必要な一点を見抜けます。",
      },
      {
        title: "つまずきやすい場面",
        text: "情報を集めすぎると、行動に移るタイミングを逃しやすくなります。完璧な答えを待つより、仮説で一歩進む方が結果につながることもあります。",
      },
      {
        title: "伸ばし方",
        text: "判断基準を先に決めておくと、分析が長引きにくくなります。70%見えたら一度撃つ、くらいの感覚が相性抜群です。",
      },
    ],
    quest: "気になっていることを一つ選び、判断基準を3行で書き出してみましょう。",
  },
  {
    id: "bear",
    sigil: "熊",
    image: "assets/characters/bear.png",
    name: "巌盾のクマ",
    className: "ガーディアン",
    weapon: "ウォーハンマー",
    accent: "rgba(245, 185, 66, 0.32)",
    summary: "焦らず受け止め、必要な一撃を入れる安定型。土台づくりで力を発揮します。",
    traits: ["安定感", "忍耐力", "包容力"],
    details: [
      {
        title: "性格の核",
        text: "あなたは落ち着きと粘り強さで周りを支えるタイプです。急な変化にも大きく崩れず、まず受け止めてから現実的な手を探します。",
      },
      {
        title: "強みが出る場面",
        text: "継続、管理、育成、土台づくり、守りの判断で強さが出ます。短距離より長距離で真価を発揮し、周りに安心感を与えます。",
      },
      {
        title: "つまずきやすい場面",
        text: "慎重さが強く出ると、動き出しが少し遅くなることがあります。また、自分が我慢すればいいと考えすぎると負担が溜まります。",
      },
      {
        title: "伸ばし方",
        text: "守るものと手放すものを分けると、判断が軽くなります。小さな変化を先に試すことで、安定感とスピードを両立できます。",
      },
    ],
    quest: "今抱えていることを、守るもの・任せるもの・後回しにするものに分けてみましょう。",
  },
  {
    id: "cat",
    sigil: "猫",
    image: "assets/characters/cat.png",
    name: "夜爪のネコ",
    className: "シャドウローグ",
    weapon: "ツインダガー",
    accent: "rgba(140, 109, 255, 0.3)",
    summary: "身軽に試して突破口を作る機動型。自由度が高いほど鋭く動けます。",
    traits: ["瞬発力", "柔軟性", "観察眼"],
    details: [
      {
        title: "性格の核",
        text: "あなたは小回りのよさと独自の観察眼を持つタイプです。正面突破だけにこだわらず、横道や抜け道から流れを変えるのが得意です。",
      },
      {
        title: "強みが出る場面",
        text: "試行錯誤、改善、探索、短期集中の場面で力が出ます。周りが見落とした違和感に気づき、軽やかに軌道修正できます。",
      },
      {
        title: "つまずきやすい場面",
        text: "細かく管理される環境や、理由のないルールが多い場所では力を出しにくくなります。自由がないと集中力が散りやすいタイプです。",
      },
      {
        title: "伸ばし方",
        text: "自由に動ける範囲を先に決めると、あなたの機動力はさらに活きます。期限とゴールだけ握って、方法は自分流にするのが合っています。",
      },
    ],
    quest: "気になっている作業を一つ、いつもと違うやり方で10分だけ試してみましょう。",
  },
  {
    id: "deer",
    sigil: "鹿",
    image: "assets/characters/deer.png",
    name: "翠晶のシカ",
    className: "クリスタルプリースト",
    weapon: "水晶スピア",
    accent: "rgba(66, 212, 155, 0.32)",
    summary: "空気を整え、人の力を引き出す調和型。静かな影響力を持っています。",
    traits: ["共感力", "調整力", "回復力"],
    details: [
      {
        title: "性格の核",
        text: "あなたは人の気持ちや場の温度に気づきやすいタイプです。誰かが言葉にできていない違和感を拾い、安心して話せる空気を作れます。",
      },
      {
        title: "強みが出る場面",
        text: "相談、調整、サポート、チームの雰囲気づくりで力を発揮します。強く押すより、自然に人を動きやすくする影響力があります。",
      },
      {
        title: "つまずきやすい場面",
        text: "周りを優先しすぎると、自分の希望を後回しにしがちです。全員を大切にしようとして、決断が遅れることもあります。",
      },
      {
        title: "伸ばし方",
        text: "自分の希望を先に一文で言ってから調整に入ると、優しさが消耗に変わりにくくなります。境界線も思いやりの一部です。",
      },
    ],
    quest: "今日は一つだけ、自分の希望を先に伝えてから相談を始めてみましょう。",
  },
  {
    id: "rabbit",
    sigil: "兎",
    image: "assets/characters/rabbit.png",
    name: "閃脚のウサギ",
    className: "ライトデュエリスト",
    weapon: "レイピア",
    accent: "rgba(255, 156, 95, 0.32)",
    summary: "軽やかに動きながら好機をつかむ挑戦型。小さな一歩を連続させるのが得意です。",
    traits: ["行動力", "好奇心", "スピード"],
    details: [
      {
        title: "性格の核",
        text: "あなたは考えながら動ける軽やかなタイプです。大きな準備よりも、まず小さく試して、反応を見ながらテンポよく進めます。",
      },
      {
        title: "強みが出る場面",
        text: "新しい挑戦、短期目標、イベント、発信、学び始めで力を発揮します。最初の一歩を踏み出す速さが周りの背中を押します。",
      },
      {
        title: "つまずきやすい場面",
        text: "興味が移りやすいため、長い計画では途中で別の刺激に惹かれることがあります。勢いだけで約束を増やしすぎる点にも注意です。",
      },
      {
        title: "伸ばし方",
        text: "短い区切りと見える達成感を用意すると継続力が上がります。大きな目標を一週間ごとのミニクエストに分けましょう。",
      },
    ],
    quest: "やりたいことを一つ選び、今日中に終わる最小ステップまで小さくしてみましょう。",
  },
  {
    id: "lion",
    sigil: "獅",
    image: "assets/characters/lion.png",
    name: "暁冠のライオン",
    className: "ロードコマンダー",
    weapon: "バトルアックス",
    accent: "rgba(230, 132, 43, 0.34)",
    summary: "迷いを断ち、全体を引っ張る統率型。大事な場面で決断力が光ります。",
    traits: ["統率力", "決断力", "突破力"],
    details: [
      {
        title: "性格の核",
        text: "あなたは大事な場面で腹を決められるタイプです。曖昧な状況でも方向性を示し、周りが動き出すきっかけを作れます。",
      },
      {
        title: "強みが出る場面",
        text: "意思決定、リーダー役、勝負どころ、停滞した場の立て直しで力を発揮します。目標がはっきりしているほど推進力が増します。",
      },
      {
        title: "つまずきやすい場面",
        text: "急いで結果を出したい気持ちが強いと、周りの不安や細部を見落とすことがあります。正しさだけでなく納得感も大切です。",
      },
      {
        title: "伸ばし方",
        text: "決断の前に一人だけ別視点の意見を聞くと、判断の精度が上がります。強さに余白を足すと、より信頼されるリーダーになります。",
      },
    ],
    quest: "迷っていることを一つ選び、判断に必要な条件を3つに絞って決めてみましょう。",
  },
];

const questions = [
  {
    text: "知らないダンジョンに入る時、最初にやることは？",
    answers: [
      { label: "地形や敵の動きを観察する", note: "まず情報を集めてから動く", score: { owl: 2, fox: 1 } },
      { label: "先頭に立って道を切り開く", note: "不確実でも前進する", score: { lion: 2, wolf: 1 } },
      { label: "仲間の状態と役割を確認する", note: "全員が動きやすい形を作る", score: { deer: 2, bear: 1 } },
      { label: "横道や隠し扉を探す", note: "面白い抜け道を見逃さない", score: { cat: 2, rabbit: 1 } },
    ],
  },
  {
    text: "急に予定が変わった時、あなたに近い反応は？",
    answers: [
      { label: "すぐ代案を出して切り替える", note: "変化を材料にする", score: { fox: 2, rabbit: 1 } },
      { label: "影響範囲を整理して判断する", note: "慌てず全体像を見る", score: { owl: 2, bear: 1 } },
      { label: "みんなが困っていないか確認する", note: "場の不安を減らす", score: { deer: 2, wolf: 1 } },
      { label: "まず動いて、動きながら調整する", note: "止まるより試す", score: { rabbit: 2, cat: 1 } },
    ],
  },
  {
    text: "チームで一番任されやすい役割は？",
    answers: [
      { label: "方向性を決めるリーダー", note: "迷いを断つ係", score: { lion: 2, fox: 1 } },
      { label: "最後まで支える守り役", note: "安定して完遂する係", score: { wolf: 2, bear: 1 } },
      { label: "空気を整える調整役", note: "人と人をつなぐ係", score: { deer: 2, owl: 1 } },
      { label: "突破口を探す遊撃役", note: "隙間を見つける係", score: { cat: 2, rabbit: 1 } },
    ],
  },
  {
    text: "褒められて一番うれしい言葉は？",
    answers: [
      { label: "発想が面白い", note: "ひらめきを認められたい", score: { fox: 2, cat: 1 } },
      { label: "安心して任せられる", note: "信頼を大切にしたい", score: { wolf: 2, bear: 1 } },
      { label: "よく見ている", note: "観察力を活かしたい", score: { owl: 2, deer: 1 } },
      { label: "決断が早い", note: "勢いと判断力を出したい", score: { lion: 2, rabbit: 1 } },
    ],
  },
  {
    text: "強い敵が現れたら、どう戦う？",
    answers: [
      { label: "弱点を探して一気に突く", note: "勝ち筋を見抜く", score: { owl: 2, cat: 1 } },
      { label: "味方を守りながら粘る", note: "崩れない陣形を作る", score: { bear: 2, wolf: 1 } },
      { label: "相手の裏をかく作戦を出す", note: "予想外の手で揺さぶる", score: { fox: 2, lion: 1 } },
      { label: "素早く動いてペースを乱す", note: "スピードで流れを変える", score: { rabbit: 2, cat: 1 } },
    ],
  },
  {
    text: "休みの日にエネルギーが戻る過ごし方は？",
    answers: [
      { label: "静かな場所で考えを整理する", note: "頭の中を整える", score: { owl: 2, deer: 1 } },
      { label: "気の合う人と深く話す", note: "関係性で回復する", score: { deer: 2, wolf: 1 } },
      { label: "新しい場所や体験に行く", note: "刺激で回復する", score: { rabbit: 2, fox: 1 } },
      { label: "家でしっかり休んで備える", note: "体力を貯める", score: { bear: 2, cat: 1 } },
    ],
  },
  {
    text: "あなたが苦手になりやすい状況は？",
    answers: [
      { label: "理由が見えないまま急かされる", note: "納得してから進みたい", score: { owl: 2, bear: 1 } },
      { label: "自由に試す余地がない", note: "動きの幅がほしい", score: { cat: 2, fox: 1 } },
      { label: "誰も責任を取らない", note: "芯のある判断がほしい", score: { lion: 2, wolf: 1 } },
      { label: "人の気持ちが置き去りになる", note: "関係性を大切にしたい", score: { deer: 2, bear: 1 } },
    ],
  },
  {
    text: "冒険の最後、あなたが手にしたいものは？",
    answers: [
      { label: "まだ誰も見つけていない知識", note: "世界の仕組みを知りたい", score: { owl: 2, fox: 1 } },
      { label: "仲間と勝ち取った信頼", note: "一緒に強くなりたい", score: { wolf: 2, deer: 1 } },
      { label: "自分で道を選んだ実感", note: "自由な選択を大切にしたい", score: { cat: 2, rabbit: 1 } },
      { label: "大きな壁を越えた証", note: "挑戦の結果を残したい", score: { lion: 2, bear: 1 } },
    ],
  },
];

const state = {
  current: 0,
  answers: Array(questions.length).fill(null),
};

const characterGrid = document.querySelector("#characterGrid");
const questionCount = document.querySelector("#questionCount");
const questionText = document.querySelector("#questionText");
const choiceList = document.querySelector("#choiceList");
const progressBar = document.querySelector("#progressBar");
const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const questionPanel = document.querySelector("#questionPanel");
const loadingPanel = document.querySelector("#loadingPanel");
const statusPill = document.querySelector("#statusPill");
const resultShell = document.querySelector("#resultShell");

function renderCharacters() {
  characterGrid.innerHTML = characters
    .map(
      (character) => `
        <article class="character-card" style="--accent: ${character.accent}">
          <div class="character-avatar">
            <img src="${character.image}" alt="${character.name}のキャラ画像" loading="lazy" />
          </div>
          <p class="character-class">${character.className}</p>
          <h3>${character.name}</h3>
          <span class="weapon-badge">武器: ${character.weapon}</span>
          <p>${character.summary}</p>
        </article>
      `,
    )
    .join("");
}

function renderQuestion() {
  const question = questions[state.current];
  const selectedIndex = state.answers[state.current];
  const progress = ((state.current + 1) / questions.length) * 100;

  questionCount.textContent = `QUESTION ${String(state.current + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
  questionText.textContent = question.text;
  progressBar.style.width = `${progress}%`;
  backButton.disabled = state.current === 0;
  nextButton.disabled = selectedIndex === null;
  nextButton.textContent = state.current === questions.length - 1 ? "診断する" : "次へ";
  statusPill.textContent = "ONLINE";

  choiceList.innerHTML = question.answers
    .map(
      (answer, index) => `
        <button class="choice-button ${selectedIndex === index ? "is-selected" : ""}" type="button" data-answer="${index}">
          <span class="choice-token">${String.fromCharCode(65 + index)}</span>
          <span>
            <span class="choice-main">${answer.label}</span>
            <span class="choice-note">${answer.note}</span>
          </span>
        </button>
      `,
    )
    .join("");
}

function calculateScores() {
  const scores = Object.fromEntries(characters.map((character) => [character.id, 0]));

  state.answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;
    const score = questions[questionIndex].answers[answerIndex].score;
    Object.entries(score).forEach(([id, value]) => {
      scores[id] += value;
    });
  });

  return characters
    .map((character) => ({
      ...character,
      score: scores[character.id],
    }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, "ja"));
}

function showLoadingThenResult() {
  questionPanel.style.display = "none";
  loadingPanel.classList.add("is-visible");
  statusPill.textContent = "SCANNING";
  progressBar.style.width = "100%";

  window.setTimeout(() => {
    loadingPanel.classList.remove("is-visible");
    questionPanel.style.display = "block";
    renderResult();
    document.querySelector("#result").scrollIntoView({ behavior: "smooth", block: "start" });
    renderQuestion();
  }, 850);
}

function renderResult() {
  const ranked = calculateScores();
  const winner = ranked[0];
  const topScore = Math.max(winner.score, 1);
  const topThree = ranked.slice(0, 3);
  const subType = ranked[1];

  resultShell.innerHTML = `
    <article class="result-card result-card-detailed">
      <div class="result-portrait" style="--accent: ${winner.accent}">
        <img class="result-character-img" src="${winner.image}" alt="${winner.name}のキャラ画像" />
      </div>
      <div class="result-body">
        <p class="result-tag">Your Beast Arsenal</p>
        <h3>${winner.name}</h3>
        <p class="weapon-line">${winner.className} / 武器: ${winner.weapon}</p>
        <p class="result-copy">${winner.summary}</p>
        <ul class="trait-list">
          ${winner.traits.map((trait) => `<li>${trait}</li>`).join("")}
        </ul>
        <div class="detail-grid">
          ${winner.details
            .map(
              (detail) => `
                <section class="detail-block">
                  <h4>${detail.title}</h4>
                  <p>${detail.text}</p>
                </section>
              `,
            )
            .join("")}
        </div>
        <section class="quest-box">
          <h4>今日のミニクエスト</h4>
          <p>${winner.quest}</p>
        </section>
        <section class="subtype-box">
          <h4>サブタイプの傾向</h4>
          <p>2番目に近いタイプは「${subType.name}」。あなたの中には、${subType.traits[0]}や${subType.traits[1]}の要素も混ざっています。</p>
        </section>
        <div class="match-list" aria-label="上位タイプとの相性">
          ${topThree
            .map((character) => {
              const percent = Math.round((character.score / topScore) * 100);
              return `
                <div class="match-row">
                  <span>${character.sigil} ${character.name.replace(/^.+の/, "")}</span>
                  <span class="match-meter"><span style="width: ${percent}%"></span></span>
                  <strong>${percent}%</strong>
                </div>
              `;
            })
            .join("")}
        </div>
        <div class="result-actions">
          <button class="button button-primary" type="button" id="copyButton">
            <span aria-hidden="true">⧉</span>
            結果をコピー
          </button>
          <button class="button button-quiet" type="button" id="retryButton">
            <span aria-hidden="true">↺</span>
            もう一度
          </button>
        </div>
      </div>
    </article>
  `;

  document.querySelector("#copyButton").addEventListener("click", () => copyResult(winner, subType));
  document.querySelector("#retryButton").addEventListener("click", resetQuiz);
}

async function copyResult(winner, subType) {
  const text = [
    `獣装診断AIの結果: ${winner.name} (${winner.className})`,
    `武器: ${winner.weapon}`,
    `特徴: ${winner.traits.join(" / ")}`,
    `ひとこと: ${winner.summary}`,
    `サブタイプ: ${subType.name}`,
  ].join("\n");
  const copyButton = document.querySelector("#copyButton");

  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "コピーしました";
  } catch {
    copyButton.textContent = "コピー不可";
  }

  window.setTimeout(() => {
    copyButton.innerHTML = '<span aria-hidden="true">⧉</span>結果をコピー';
  }, 1400);
}

function resetQuiz() {
  state.current = 0;
  state.answers = Array(questions.length).fill(null);
  resultShell.innerHTML = `
    <div class="empty-result" id="emptyResult">
      <p>まだ結果はありません。上の質問に答えると、あなたの獣装タイプがここに表示されます。</p>
    </div>
  `;
  renderQuestion();
  document.querySelector("#quiz").scrollIntoView({ behavior: "smooth", block: "start" });
}

choiceList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (!button) return;
  state.answers[state.current] = Number(button.dataset.answer);
  renderQuestion();
});

backButton.addEventListener("click", () => {
  if (state.current === 0) return;
  state.current -= 1;
  renderQuestion();
});

nextButton.addEventListener("click", () => {
  if (state.answers[state.current] === null) return;
  if (state.current === questions.length - 1) {
    showLoadingThenResult();
    return;
  }
  state.current += 1;
  renderQuestion();
});

renderCharacters();
renderQuestion();
