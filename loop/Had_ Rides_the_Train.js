const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (id) => {
  id = BigInt(id); // Use BigInt for large numbers
  let row = id / 4n; // Row number
  let col = id % 4n; // Column number

  console.log(`${row} ${col}`); // to delete n inside num use ${}
  rl.close();
});
