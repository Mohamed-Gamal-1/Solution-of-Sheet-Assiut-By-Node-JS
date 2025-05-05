const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
let n, matrix;

rl.on("line", (input) => {
  inputLines.push(input);

  if (inputLines.length === parseInt(inputLines[0].split(" ")[0]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  matrix = inputLines.map((n) => n.split(" ").map(Number));
  [n] = matrix[0];
  let mainDiagonal = 0;
  let secondDiagonal = 0;
  matrix.shift();
  // my  sol
  /*
    {
   //   get sumition of main diagonal
        for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
            if (i === j) {
              mainDiagonal += matrix[i][j];
              break;
            }
          }
        }
      
        //   // get sumition of second diagonal
        let x = 1,
          m = n;
        i = 0;
        while (m > 0) {
          secondDiagonal += matrix[i][n - x];
          x++;
          i++;
          m--;
        }
      
        console.log(Math.abs(mainDiagonal - secondDiagonal));
        }
        */

  // Best Solution From Chat GPT
  {
    for (let i = 0; i < matrix.length; i++) {
      mainDiagonal += matrix[i][i];
      secondDiagonal += matrix[i][n - 1 - i];
    }
    let result = Math.abs(mainDiagonal - secondDiagonal);
    console.log(result);
  }
});
