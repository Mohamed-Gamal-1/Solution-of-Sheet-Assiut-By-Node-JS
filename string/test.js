const input = `3
000
010`;

const lines = input.trim().split("\n");
const n = parseInt(lines[0]);
const s1 = lines[1].trim();
const s2 = lines[2].trim();

function isGod(str) {
  for (let i = 0; i <= str.length - 3; i++) {
    let substr = str.substr(i, 3);
    if (substr === "010" || substr === "101") return true;
  }
  return false;
}

console.log(isGod(s1) ? "Good" : "Bad");
console.log(isGod(s2) ? "Good" : "Bad");
