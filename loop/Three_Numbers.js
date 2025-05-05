const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (n) => {
  let [k, s] = n.split(" ").map(Number);

  let cases = 0;
  let i, j, m;
  for (i = 0; i <= k; i++) {
    for (j = 0; j <= k; j++) {
      for (m = 0; m <= k; m++) {
        if (i + j + m === s) {
          cases++;
        }
      }
    }
  }

  console.log(String(cases));
  rl.close();
});
