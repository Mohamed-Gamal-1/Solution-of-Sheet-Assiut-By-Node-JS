const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];

rl.on("line", (l) => {
  inputLines.push(l);
  if (inputLines.length === 3) {
    rl.close();
  }
});

const newLocal = "close";
rl.on(newLocal, () => {
  inputLines = inputLines.map((n) => n.split(" ").map(Number));
  let [i, j, arr] = inputLines;
  i = Number(i);
  j = Number(j);
  let answer = [];
  let z = 1;
  for (let x = 0; x < arr.length - 1; x++) {
    j = i + 1;

    for (let y = z; y < arr.length; y++) {
      answer.push(arr[x] + arr[y] + (j - i));

      j++;
    }
    i++;
    y = z++;
  }

  console.log(Math.min(...answer));
});
