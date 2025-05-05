const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
let n, m, matrix, x;

rl.on("line", (input) => {
  inputLines.push(input);

  if (inputLines.length === parseInt(inputLines[0].split(" ")[0]) + 2) {
    rl.close();
  }
});

rl.on("close", () => {
  inputLines = inputLines.map((n) => n.split(" ").map(Number));
  [n, m] = inputLines[0];
  x = parseInt(inputLines[n + 1]);
  matrix = inputLines.splice(1, n);
  let areTaking = matrix.every((n) => n.every((i) => i !== x));
  console.log(areTaking ? "will take number" : "will not take number");
});
