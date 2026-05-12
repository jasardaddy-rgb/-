// 🧠 自动生成故事模板（关键升级）
function generateCase() {

  const subjects = ["一个人", "一名学生", "一位医生", "一个孩子"];
  const events = ["死亡", "失踪", "崩溃", "自杀", "逃离"];
  const causes = ["童年记忆", "时间错乱", "心理创伤", "实验事故", "身份错误"];

  let s = subjects[Math.floor(Math.random()*subjects.length)];
  let e = events[Math.floor(Math.random()*events.length)];
  let c = causes[Math.floor(Math.random()*causes.length)];

  return {
    q: `${s}经历了一件${e}事件`,
    a: `真实原因是：${c}导致了整个事件`,
    clues: [c]
  };
}