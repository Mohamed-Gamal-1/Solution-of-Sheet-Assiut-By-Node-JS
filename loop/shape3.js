const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  let n = parseInt(input);

  function printPattern(n) {
    // Upper part
    for (let i = 1; i <= n; i++) {
      console.log(" ".repeat(n - i) + "*".repeat(i * 2 - 1));
    }

    // Lower part
    for (let i = n; i >= 1; i--) {
      console.log(" ".repeat(n - i) + "*".repeat(i * 2 - 1));
    }
  }

  printPattern(n);
  rl.close();
});
