function generateAnswer(digit) {
  let ans = [];
 
  while (ans.length < digit) {
    ans.push(Math.floor(Math.random() * 10));
  }

  return ans;
}


function startGame() {
  // 桁数を格納
  const digits = Number(document.getElementById("digits").value);  // Number型に変換(そのままではString型になる)
  const answer = generateAnswer(digits);
}
