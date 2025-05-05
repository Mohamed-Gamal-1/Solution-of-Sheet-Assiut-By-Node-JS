const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];

rl.on("line", (l) => {
  inputLines.push(l);
  if (inputLines.length === parseInt(inputLines[0]) * 2 + 1) {
    rl.close();
  }
});

const newLocal = "close";
rl.on(newLocal, () => {
  inputLines = inputLines.map((n) => n.split(" ").map(Number));

  let caseIndex = inputLines.length - 3;

  let x = 0;
  while (inputLines.length / 3 > x) {
    let caseArr = inputLines[caseIndex];
    caseIndex += 2;
    x++;

    let subarrays = [];
    let max = [];

    for (let i = 0; i < caseArr.length; i++) {
      subarrays.push([caseArr[i]]);
    }

    for (let i = 0; i < caseArr.length - 1; i++) {
      subarrays.push([caseArr[i], caseArr[i + 1]]);
    }

    for (let i = 0; i < caseArr.length - 2; i++) {
      subarrays.push([caseArr[i], caseArr[i + 1], caseArr[i + 2]]);
    }

    subarrays.push(caseArr);

    for (let i = 0; i < subarrays.length; i++) {
      max.push(Math.max(...subarrays[i]));
    }

    console.log(max.join(" "));
  }
});
