const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (n) => {
  n = Number(n);

  if (n === 0) {
    console.log(0);
  } else if (n === 1) {
    console.log(0);
  } else {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    console.log(fib[fib.length - 1]);
  }

  rl.close();
});
