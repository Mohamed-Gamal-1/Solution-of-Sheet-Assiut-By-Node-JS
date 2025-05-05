const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLine = [];

rl.on("line", (d) => {
  inputLine.push(Number(d));
  if (parseInt(inputLine[0]) + 1 == inputLine.length) {
    rl.close();
  }
});

rl.on("close", () => {
  // convert decimal to binary
  let binary = [];
  for (let i = 1; i < inputLine.length; i++) {
    binary.push(inputLine[i].toString(2));
  }

  let binaryArr = binary.map((b) => b.split("")); // [[1,1,0,1], [1,0,0]]

  let numOfOnce = "";

  for (let i = 0; i < binaryArr.length; i++) {
    for (let j = 0; j < binaryArr[i].length; j++) {
      if (binaryArr[i][j] == 1) {
        numOfOnce += binaryArr[i][j]; // "111"
      }
    }

    numOfOnce += " ";
  }
  numOfOnce = numOfOnce.trim();

  let numOfOnceArr = numOfOnce.split(" ");

  numOfOnceArr.forEach((b) => console.log(parseInt(b, 2)));
});
