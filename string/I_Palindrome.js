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
  let s = await ask("");

  let p = "";

  for (let i = s.length - 1; i >= 0; i--) {
    p += s[i];
  }
  console.log(p === s ? "YES" : "NO");
  rl.close();
}

main();
