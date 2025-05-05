// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("", (input) => {
//   let [n, a, b] = input.split(" ").map(Number);

//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     let x = i, //x = 13
//       sumDigit = 0; // sumDigit = 0

//     while (x > 0) {
//       sumDigit += x % 10; // sumDigit = 0 + 3 +1
//       x = Math.floor(x / 10); // x = 1
//     }

//     if (sumDigit >= a && sumDigit <= b) {
//       sum += i; // sum = 1 + 2 + 3+4+5+11+12+13
//     }
//   }

//   console.log(sum);
//   rl.close();
// });

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  let [n, a, b] = input.split(" ").map(Number);

  let sum = 0;

  for (let i = 0; i <= n; i++) {
    let x = i;
    let sumOfD = 0;

    while (x > 0) {
      sumOfD += x % 10;
      x = Math.floor(x / 10);
    }

    if (sumOfD >= a && sumOfD <= b) {
      sum += i;
    }
  }
  console.log(sum);
  rl.close();
});
