const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === parseInt(input[0].split(" ")[0]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const [N, M] = input[0].split(" ").map(Number);
  const array = input.slice(1, N + 1).map((row) => row.split(" ").map(Number));

  //         [1]
  // for (let i = 0; i < N; i++) {
  //   console.log(array[i].reverse().join(" "));
  // }

  //        [2]
  // for (let i = 0; i < N; i++) {
  //   let mirrorRow = "";
  //   for (let j = M - 1; j >= 0; j--) {
  //     mirrorRow += array[i][j] + " ";
  //   }

  //   console.log(mirrorRow);
  // }

  //      [3]

  const mirred = [];

  for (let i = 0; i < N; i++) {
    mirred[i] = [];

    for (let j = 0; j < M; j++) {
      mirred[i][j] = array[i][M - 1 - j];
    }
  }

  for (let i = 0; i < N; i++) {
    console.log(mirred[i].join(" "));
  }
});
