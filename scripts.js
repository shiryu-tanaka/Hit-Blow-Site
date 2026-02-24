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
}

function startGame() {
  toggleHidden();

  // 桁数を格納
  digit = Number(document.getElementById("digits").value);  // Number型に変換(そのままではString型になる)
  generateAnswer(digit);
  
}

function endGame() {
  answer = [];
  tryCount = 0;
  digit = 0;

  document.getElementById("user-guess").value = "";

  const rows = document.querySelectorAll("tbody tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i].innerHTML = `<td>${i + 1}</td><td></td><td></td><td></td>`;
  }

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
  document.getElementById("user-guess").value = "";
}  


function toggleHidden() {
  document.getElementById("rule").classList.toggle("hidden");
  document.getElementById("game").classList.toggle("hidden");
  document.getElementById("setup").classList.toggle("hidden");
}
