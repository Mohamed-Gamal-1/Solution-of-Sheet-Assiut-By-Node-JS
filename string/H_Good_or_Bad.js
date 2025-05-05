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

function isGood(str) {
  for (let i = 0; i < str.length; i++) {
    let substr = str.substr(i, 3);
    if (substr === "010" || substr === "101") return true;
  }
  return false;
}

async function main() {
  let n = await ask("");
  let s1 = await ask("");
  let s2 = await ask("");

  console.log(isGood(s1) ? "Good" : "Bad");
  console.log(isGood(s2) ? "Good" : "Bad");

  rl.close();
}

main();
