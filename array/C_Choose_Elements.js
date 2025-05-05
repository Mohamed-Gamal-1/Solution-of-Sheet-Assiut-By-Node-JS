const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const k = parseInt(input[0].split(" ")[1]);
  let arr = input
    .splice(1)
    .map((n) => n.split(" ").map(BigInt))
    .flat();

  arr = arr.sort((a, b) => Number(b) - Number(a));
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  console.log(`${arr}`);
});
