const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (n) => {
  n = Number(n);
  let fib = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    fib.push(fib[i] + fib[i + 1]);
  }

  console.log(`${fib.join(" ")} `);

  rl.close();
});
