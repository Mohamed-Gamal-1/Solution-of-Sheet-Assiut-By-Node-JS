const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];

rl.on("line", (input) => {
  inputLines.push(input);
  if (inputLines.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const arr = inputLines
    .splice(1)
    .map((n) => n.split(" ").map(Number))
    .flat();
  const arrPlusOne = arr.map((n) => n + 1);

  let count = 0;
  //   for (let i = 0; i < arrPlusOne.length; i++) {
  //     for (let j = 0; j < arr.length; j++) {
  //       if (arrPlusOne[i] === arr[j]) {
  //         count++;
  //         break;
  //       }
  //     }
  //   }

  for (const i of arrPlusOne) {
    for (const j of arr) {
      if (i === j) {
        count++;
        break;
      }
    }
  }

  console.log(count);
});
