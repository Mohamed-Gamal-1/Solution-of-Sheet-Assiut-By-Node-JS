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
  let arr = inputLines
    .splice(1)
    .map((n) => n.split(" ").map(Number))
    .flat();
  let flip = 0;

  //   for (let i = 0; i < arr.length; i++) {
  //     if (i === arr.length - 1) break;

  //     if (arr[i] > 0 && arr[i + 1] > 0) {
  //       arr[i + 1] = -arr[i + 1];
  //       flip++;
  //     } else if (arr[i] < 0 && arr[i + 1] < 0) {
  //       arr[i + 1] = -arr[i + 1];
  //       flip++;
  //     }
  //   }

  //   console.log(flip);

  let flipsPatternA = 0; // Start with positive
  let flipsPatternB = 0; // Start with negative

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // Pattern A: even index should be positive, odd negative
    if (i % 2 === 0 && val < 0) flipsPatternA++;
    if (i % 2 === 1 && val > 0) flipsPatternA++;

    // Pattern B: even index should be negative, odd positive
    if (i % 2 === 0 && val > 0) flipsPatternB++;
    if (i % 2 === 1 && val < 0) flipsPatternB++;
  }
  console.log(Math.min(flipsPatternA, flipsPatternB));
});
