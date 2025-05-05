const { count } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputline = [];

rl.on("line", (inputs) => {
  inputline.push(parseInt(inputs));

  if (inputline.length === inputline[0] + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  let binary = [];
  // convert dicemal to binary
  for (i = 1; i < inputline.length; i++) {
    binary.push(inputline[i].toString(2));
  }
  // let every binary to be array
  let binaryArr = binary.map((b) => b.split("").map(String));

  for (i = 0; i < binaryArr.length; i++) {
    let output = "";
    for (j = 0; j < binaryArr[i].length; j++) {
      if (binary[i][j] == 1) {
        output += binary[i][j];
      }
    }
    console.log(parseInt(output, 2));
  }
});
