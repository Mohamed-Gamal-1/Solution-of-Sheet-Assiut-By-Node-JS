const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLine = [];

rl.on("line", (inputs) => {
  inputLine.push(inputs);

  if (inputLine.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  let inputLineArr = inputLine.map((line) => line.split(" ").map(Number));

  let n = inputLineArr[0][0];
  let k = inputLineArr[0][1];
  let index = 0;
  let output = "";
  let division = 0;

  for (let i = 1; i < inputLineArr.length; i++) {
    for (let j = 0; j < inputLineArr[i].length; j++) {
      while (Math.ceil(n / k) > division) {
        let minVakues = [];

        if (index < inputLineArr[i].length) {
          minVakues.push(inputLineArr[i][index]);
        }
        if (index + 1 < inputLineArr[i].length) {
          minVakues.push(inputLineArr[i][index + 1]);
        }
        if (index + 2 < inputLineArr[i].length) {
          minVakues.push(inputLineArr[i][index + 2]);
        }

        if (minVakues.length > 0) {
          output += Math.min(...minVakues) + " ";
        }

        index += k;
        division++;
      }
    }
  }

  console.log(output);
});
