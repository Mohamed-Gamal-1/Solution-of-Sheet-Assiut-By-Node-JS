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
  //   console.log(number.reverse().join(" "))
  let output = "";
  for (let i = number.length - 1; i >= 0; i--) {
    output += number[i] + " ";
  }
  console.log(output);
});
