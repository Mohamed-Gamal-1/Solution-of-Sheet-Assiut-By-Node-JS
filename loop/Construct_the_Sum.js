const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line);
  if (inputLines.length == parseInt(inputLines[0]) + 1) {
    rl.close();
  }
});
rl.on("close", () => {
  let T = parseInt(inputLines[0]); // Number of test cases
  let result = [];

  for (let i = 1; i <= T; i++) {
    let [n, s] = inputLines[i].split(" ").map(Number);
    let numbers = [];
    let sum = 0;
    if ((n * (n - 1)) / 2 < s) {
      console.log("-1");
    } else {
      for (let num = n; num > 0; num--) {
        if (num == s) {
          continue;
        } else if (sum + num <= s) {
          sum += num;
          numbers.push(num);
        }
      }
      console.log(numbers.join(" "));
    }
  }
});
