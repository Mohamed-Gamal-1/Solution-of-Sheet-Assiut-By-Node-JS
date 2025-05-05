const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (n) => {
  n = Number(n);
  let output = "";

  for (let i = 1; i <= n * 4; i++) {
    if (i % 4 === 0) {
      output += "PUM\n";
    } else {
      output += i + " ";
    }
  }

  console.log(output);

  // let output = "";
  // for (let i = 1; i <= n * 4; i++) {
  //   if (i % 4 === 0) {
  //     output += "PUM\n";
  //   } else {
  //     output += i + " ";
  //   }
  // }
  // console.log(output);
  rl.close();
});
