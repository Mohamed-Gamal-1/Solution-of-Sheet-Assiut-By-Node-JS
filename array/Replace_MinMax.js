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
  let arr = inputLines[1];

  let min = Math.min(...arr),
    max = Math.max(...arr);

  let minIndex = arr.indexOf(min),
    maxIndex = arr.indexOf(max);

  [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
  console.log(arr.join(" "));
});
