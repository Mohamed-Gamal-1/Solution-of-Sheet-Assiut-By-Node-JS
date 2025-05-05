const { Console } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  let output = "";
  for (let s of input) {
    if (s == "\\") break;

    output += s;
  }
  console.log(output);
  rl.close();
});
