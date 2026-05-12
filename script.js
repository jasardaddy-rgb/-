const SIZE = 14;
let grid = [];

// 🧠 能量系统
let energy = {
  blue: 50,
  red: 50,
  green: 50
};

// 初始化
function init() {

  let g = document.getElementById("grid");

  for (let i = 0; i < SIZE * SIZE; i++) {

    let cell = document.createElement("div");
    cell.className = "cell";

    let r = Math.random();

    if (r < 0.33) cell.classList.add("blue");
    else if (r < 0.66) cell.classList.add("red");
    else cell.classList.add("green");

    grid.push(cell);
    g.appendChild(cell);
  }

  update();
}

// ⚡ 技能1：扩张
function skillExpand() {

  energy.blue -= 10;

  for (let i = 0; i < grid.length; i++) {

    if (Math.random() < 0.2) {
      grid[i].className = "cell blue";
    }
  }

  update();
}

// 💥 技能2：清除敌方
function skillAttack() {

  energy.blue -= 20;

  grid.forEach(c => {

    if (c.classList.contains("red") && Math.random() < 0.3) {
      c.className = "cell green";
    }
  });

  update();
}

// ▶ AI回合（核心）
function nextTurn() {

  aiExpand("red");
  aiExpand("green");

  energy.red += 5;
  energy.green += 5;
  energy.blue += 3;

  update();
}

// 🤖 AI扩张逻辑（进化版）
function aiExpand(color) {

  grid.forEach(c => {

    if (Math.random() < 0.1 + energy[color] / 200) {
      c.className = "cell " + color;
    }
  });
}

// 📊 统计
function update() {

  let b=0,r=0,g=0;

  grid.forEach(c => {

    if (c.classList.contains("blue")) b++;
    if (c.classList.contains("red")) r++;
    if (c.classList.contains("green")) g++;
  });

  document.getElementById("blue").innerText = b;
  document.getElementById("red").innerText = r;
  document.getElementById("green").innerText = g;

  checkWin(b,r,g);
}

// 🏆 胜利
function checkWin(b,r,g) {

  if (b > 150) {
    document.getElementById("status").innerText = "🟦 你统治了世界！";
  }
  if (r > 150) {
    document.getElementById("status").innerText = "🟥 红色胜利";
  }
  if (g > 150) {
    document.getElementById("status").innerText = "🟩 绿色胜利";
  }
}

// 启动
init();
