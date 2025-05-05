const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];

rl.on("line", (input) => {
  inputLines.push(input);

  if (inputLines.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  let arr = inputLines[1].split(" ").map(Number);
  let [n, m] = inputLines[0].split(" ").map(Number);

  let freq = Array(m + 1).fill(0);

  for (let num of arr) {
    freq[num]++;
  }

  for (let i = 1; i <= m; i++) {
    console.log(freq[i]);
  }
});
