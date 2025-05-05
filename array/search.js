const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];

rl.on("line", (l) => {
  inputLines.push(l);
  if (inputLines.length === 3) {
    rl.close();
  }
});

const newLocal = "close";
rl.on(newLocal, () => {
  inputLines = inputLines.map((n) => n.split(" ").map(Number));
  let number = inputLines[1];
  let s = inputLines[2];

  if (number.includes(Number(s))) {
    console.log(number.indexOf(Number(s)));
  } else {
    console.log("-1");
  }
});
