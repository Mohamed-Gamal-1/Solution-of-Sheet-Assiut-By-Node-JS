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

    for (let num = n; num > 0; num--) {
      if (s >= num) {
        numbers.push(num);
        s -= num;
      }
      if (s === 0) break;
    }

    result.push(s === 0 ? numbers.join(" ") : "-1");
  }

  console.log(result.join("\n"));
});
