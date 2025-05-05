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

rl.on("close", () => {
  let a = inputLines[1].split(" ");
  let b = inputLines[2].split(" ");
  //   let isEqual = true;

  a = a.sort((a, b) => a - b);
  b = b.sort((a, b) => a - b);

  //   for (let i = 0; i < a.length; i++) {
  //     if (a[i] !== b[i] || a.length !== b.length) {
  //       isEqual = false;
  //       break;
  //     }
  //   }

  // anathor solution

  let isEqual = a.every((val, index) => val === b[index]);
  if (isEqual) console.log("yes");
  else console.log("no");
});
