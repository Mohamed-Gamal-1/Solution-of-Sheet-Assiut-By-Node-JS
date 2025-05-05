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
  const arr = input
    .splice(1)
    .map((n) => n.split(" ").map(Number))
    .flat();

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    } else {
      newArr = newArr.reverse();
      newArr.push(arr[i]);
    }
  }

  console.log(newArr.join(" "));
});
