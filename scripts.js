let answer = [];
let tryCount = 0;

function generateAnswer(digit) {
  while (answer.length < digit) {
    answer.push(Math.floor(Math.random() * 10));
  }
}

function startGame() {
  toggleHidden();

  // 桁数を格納
  let digits = Number(document.getElementById("digits").value);  // Number型に変換(そのままではString型になる)
  generateAnswer(digits);
  
}

function toggleHidden() {
  document.getElementById("rule").classList.toggle("hidden");
  document.getElementById("game").classList.toggle("hidden");
  document.getElementById("setup").classList.toggle("hidden");
}
