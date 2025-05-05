const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];

rl.on("line", (l) => {
  inputLines.push(l);
  if (inputLines.length === 2) {
    rl.close();
  }
});

const newLocal = "close";
rl.on(newLocal, () => {
  inputLines = inputLines.map((n) => n.split(" ").map(Number));
  let number = inputLines[1];

  for (let i = 0; i < number.length; i++) {
    if (number[i] <= 10) {
      console.log(`A[${i}] = ${number[i]}`);
    }
  }
});
