const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];

rl.on("line", (l) => {
  inputLines.push(l);
  if (inputLines.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  let arr = inputLines[1].split(" ").map(Number);

  // let isEven = false;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 === 0) {
  //     isEven = true;
  //   } else {
  //     isEven = false;
  //     break;
  //   }
  // }

  // b: while (isEven) {
  //   arr = arr.map((n) => n / 2);

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 !== 0) {
  //       break b;
  //     }
  //   }
  // }

  // if (isEven) {
  //   console.log(String(Math.min(...arr)));
  // } else {
  //   console.log("0");
  // }

  if (arr.every((n) => n % 2 === 0)) {
    while (arr.every((n) => n % 2 === 0)) {
      arr = arr.map((n) => n / 2);
    }

    console.log(Math.min(...arr));
  } else {
    console.log(0);
  }
});
