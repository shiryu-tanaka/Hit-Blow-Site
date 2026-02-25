let answer = [];
let tryCount = 0;
let digit = 0;

const guessInput = document.getElementById("user-guess");
const judgeButton = document.getElementById("judge-button");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const resultModal = document.getElementById("result-modal");

guessInput.addEventListener("input", (event) => {
  const data = guessInput.value;
  const isNumber = /\D/.test(data);
  
  if (data.length === digit && (!isNumber)) {
    judgeButton.disabled = false;
  } else {
    judgeButton.disabled = true;
  }
});

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

  // 桁数を格納
  digit = Number(document.getElementById("digits").value);  // Number型に変換(そのままではString型になる)
  generateAnswer(digit);
  
}

function endGame() {
  answer = [];
  tryCount = 0;
  digit = 0;

  judgeButton.disabled = true;

  document.getElementById("user-guess").value = "";

  const rows = document.querySelectorAll("tbody tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i].innerHTML = `<td>${i + 1}</td><td></td><td></td><td></td>`;
  }

  toggleHidden();
}

function checkGuess() {
  const guess = document.getElementById("user-guess").value;
  
  let hit = 0;
  let blow = 0;

  for (let i = 0; i < digit; i++) {
    if (answer[i] === Number(guess[i])) {
      hit++;
    } else if (answer.includes(Number(guess[i]))) {
      blow++;
    }
  }

  const rows = document.querySelectorAll("tbody tr");
  const currentRow = rows[tryCount];

  currentRow.innerHTML = `
    <td>${tryCount + 1}</td>
    <td>${guess}</td>
    <td>${hit}</td>
    <td>${blow}</td>
  `;

  tryCount++;


  if (hit === digit) {
    modalTitle.textContent = "ゲームクリア";
    modalMessage.textContent = `${tryCount}回でクリアしました！！`;

    resultModal.classList.toggle("hidden");

  } else if (tryCount === 10) {
    modalTitle.textContent = "ゲームオーバー";
    modalMessage.textContent = `答えは${answer}でした。`

    resultModal.classList.toggle("hidden");
  }

  document.getElementById("user-guess").value = "";

  judgeButton.disabled = true;
}  


function toggleHidden() {
  document.getElementById("rule").classList.toggle("hidden");
  document.getElementById("game").classList.toggle("hidden");
  document.getElementById("setup").classList.toggle("hidden");
}

