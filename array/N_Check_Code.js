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

rl.on("close", () => {
  let [a, b] = inputLines[0].split(" ").map(Number);
  let arr = inputLines[1].split("");

  if (arr[a] !== "-") {
    console.log("No");
  } else if (arr.length - a - 1 === b) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});
