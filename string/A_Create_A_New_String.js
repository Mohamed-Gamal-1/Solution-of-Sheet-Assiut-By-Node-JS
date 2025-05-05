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
  console.log(
    `${inputLines[0].length} ${inputLines[1].length}\n${inputLines[0]} ${inputLines[1]}`
  );
});
