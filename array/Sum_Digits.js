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
  inputLines = inputLines.map((n) => n.split("").map(Number));

  let arr = inputLines[1];

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
});
