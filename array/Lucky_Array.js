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
  let min = Math.min(...inputLines[1]);
  let freq = 0;
  for (let i = 0; i < inputLines[1].length; i++) {
    if (min === inputLines[1][i]) {
      freq++;
    }
  }
  if (freq % 2 === 0) {
    console.log("Unlucky");
  } else {
    console.log("Lucky");
  }
});
