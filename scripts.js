let answer = [];
let tryCount = 0;
let digit = 0;

function generateAnswer(digit) {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < digit; i++) {
    let index = Math.floor(Math.random() * numbers.length);

    answer.push(numbers[index]);
    numbers.splice(index, 1);
  }
  console.log(answer);
}

function startGame() {
  toggleHidden();
  answer = [];

  // 桁数を格納
  digit = Number(document.getElementById("digits").value);  // Number型に変換(そのままではString型になる)
  generateAnswer(digit);
  
}

function endGame() {
  answer.splice(0, answer.length);
  toggleHidden();
}

function checkGuess() {
  const inputData = document.getElementById("user-guess").value;
  
  let hit = 0;
  let blow = 0;

  for (let i = 0; i < digit; i++) {
    if (answer[i] === Number(inputData[i])) {
      hit++;
    } else if (answer.includes(Number(inputData[i]))) {
      blow++;
    }
  }

  const rows = document.querySelectorAll("tbody tr");
  const currentRow = rows[tryCount];

  console.log(currentRow);

  currentRow.innerHTML = `
    <td>${tryCount + 1}</td>
    <td>${inputData}</td>
    <td>${hit}</td>
    <td>${blow}</td>
  `;

  tryCount++;


  if (hit === digit) {
    alert("クリア");
  } else if (tryCount === 10) {

  }

}  


function toggleHidden() {
  document.getElementById("rule").classList.toggle("hidden");
  document.getElementById("game").classList.toggle("hidden");
  document.getElementById("setup").classList.toggle("hidden");
}
