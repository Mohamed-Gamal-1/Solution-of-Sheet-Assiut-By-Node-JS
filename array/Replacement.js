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

  let output = "";
  for (let n of number) {
    if (n < 0) {
      output += "2 ";
    } else if (n > 0) {
      output += "1 ";
    } else {
      output += "0 ";
    }
  }

  console.log(output);
});
