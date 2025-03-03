const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];
rl.on("line", (input) => {
  numbers.push(input);
  if (parseInt(numbers[0]) + 1 == numbers.length) {
    rl.close();
  }
});

rl.on("close", () => {
  let newArray = numbers.map((str) => str.split(" "));

  for (let i = 1; i < newArray.length; i++) {
    newArray[i].sort((a, b) => a - b);
    let [start, end] = newArray[i].map(Number);
    let sumOfOdd = 0;

    for (let k = start + 1; k < end; k++) {
      if (k % 2 !== 0) {
        sumOfOdd += k;
      }
    }
    console.log(sumOfOdd);
  }
});
