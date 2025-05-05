const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

async function main() {
  let string = await ask("");
  let output = "";
  string = string.split(",").join(" ");
  for (let ch of string) {
    if (ch === ch.toUpperCase()) {
      output += ch.toLowerCase();
    } else if (ch === ch.toLowerCase()) {
      output += ch.toUpperCase();
    }
  }

  console.log(output);
  rl.close();
}

main();
