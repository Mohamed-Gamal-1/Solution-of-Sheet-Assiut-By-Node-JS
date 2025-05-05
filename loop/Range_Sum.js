const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLine = [];

rl.on("line", (inputs) => {
  inputLine.push(inputs);

  if (inputLine.length == parseInt(inputLine[0]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  let arrayNums = inputLine.map((line) => line.split(" ").map(Number));

  for (let i = 1; i < arrayNums.length; i++) {
    let sum = 0;
    for (let j = arrayNums[i][0]; j <= arrayNums[i][1]; j++) {
      sum += j;
    }
    console.log(sum);
  }
});
