const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];
let newArray = [];
rl.on("line", (input) => {
  numbers.push(input);
  newArray = numbers.map((str) => str.split(" "));
  newArray.flat().forEach((num) => {
    if (num <= 0) {
      newArray.pop();
      rl.close();
    }
  });
});

rl.on("close", () => {
  for (let subArray of newArray) {
    subArray.sort((a, b) => a - b);
    let [start, end] = subArray.map(Number);
    let range = [];
    let sum = 0;

    for (let i = start; i <= end; i++) {
      sum += i;
      range.push(i);
    }
    console.log(`${range.join(" ")} sum =${sum}`);
  }
});
