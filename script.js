let current = generateCase();
let score = 0;
let memory = [];

// 🧠 初始化
function load() {
  current = generateCase();

  document.getElementById("story").innerHTML =
    "❓ " + current.q;

  document.getElementById("log").innerHTML = "";
  score = 0;
  memory = [];
}

load();

// 🤖 AI判断系统（升级版）
function ask() {

  let q = document.getElementById("q").value;
  if (!q) return;

  memory.push(q);

  let type = analyze(q);

  let res = judge(type);

  document.getElementById("log").innerHTML +=
    `<p>你：${q}</p><p>AI：${res.text}</p>`;

  score += res.score;

  document.getElementById("q").value = "";
}

// 🧠 语义识别
function analyze(q) {

  if (/死|杀|自杀/.test(q)) return "death";
  if (/时间|未来/.test(q)) return "time";
  if (/童年|记忆/.test(q)) return "memory";
  if (/实验|AI/.test(q)) return "logic";
  if (/身份|是谁/.test(q)) return "identity";

  return "unknown";
}

// 🧠 AI推理反馈（V4升级）
function judge(type) {

  if (type === "death")
    return {text:"🟡 接近事件核心", score:2};

  if (type === "memory")
    return {text:"🔥 你触碰到关键结构", score:4};

  if (type === "time")
    return {text:"🧠 时间线是关键", score:4};

  if (type === "identity")
    return {text:"🟢 你开始接近真相", score:3};

  return {text:"❌ 无关信息", score:-1};
}

// 💡 AI提示（动态）
function hint() {

  if (score < 3) {
    alert("🧠 提示：关注事件发生原因");
  } else if (score < 8) {
    alert("🟢 提示：时间和记忆很重要");
  } else {
    alert("🔥 你已经接近真相结构");
  }
}

// 🔄 新故事
function next() {
  load();
}