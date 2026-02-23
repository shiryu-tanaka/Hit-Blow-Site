let answer = [];
let tryCount = 0;

function generateAnswer(digit) {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < digit; i++) {
    let index = Math.floor(Math.random() * numbers.length);

    answer.push(numbers[index]);
    numbers.splice(index, 1);
  }
}

function startGame() {
  toggleHidden();

  // 桁数を格納
  let digit = Number(document.getElementById("digits").value);  // Number型に変換(そのままではString型になる)
  generateAnswer(digit);
  
}

function endGame() {
  answer.splice(0, answer.length);
  toggleHidden();
}

function checkGuess() {
  const inputData = document.getElementById("user-guess").value;
  const answerDigits = answer.length;
  
}

function toggleHidden() {
  document.getElementById("rule").classList.toggle("hidden");
  document.getElementById("game").classList.toggle("hidden");
  document.getElementById("setup").classList.toggle("hidden");
}
