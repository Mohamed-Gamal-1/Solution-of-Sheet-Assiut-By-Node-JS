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
  let arr = inputLines[1]; // [3, 1, 2, 0]
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr.join(" "));

  /*
  // Simple Sol in ec6
  let sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr.join(" "));
*/
});
