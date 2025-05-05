const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === parseInt(input[0]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const arr = input.splice(1).map((n) => n.split(" ").map(Number));

  for (let i = 0; i < arr.length; i++) {
    let [a, b] = arr[i];

    if (a === b) {
      console.log("Square");
    } else {
      console.log("Rectangle");
    }
  }
});
