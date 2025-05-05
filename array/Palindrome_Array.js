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

const newLocal = "close";
rl.on(newLocal, () => {
  inputLines = inputLines.map((n) => n.split(" ").map(Number));
  let number = inputLines[1]; // [1, 3, 2, 3, 1]

  let isPalindrome = false;
  let x = number.length;
  //   console.log(--number.length);

  if (number.length % 2 == 0) {
    isPalindrome = false;
  } else {
    for (let j = 0; j < number.length; j++) {
      if (number[j] == number[--x]) {
        isPalindrome = true;
      } else break;
    }
  }

  console.log(isPalindrome ? "YES" : "NO");
});
