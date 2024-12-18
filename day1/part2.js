const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");
let dic = {};
let rightNrs = [];

input
  .split("\n")
  .filter((line) => line.trim() !== "")
  .map((line) => {
    const [leftNr, rightNr] = line.split(/\s+/);
    if (dic[leftNr] == undefined) {
      dic[leftNr] = 0;
    }
    rightNrs.push(rightNr);
  });

rightNrs.forEach((rightNr) => {
  if (dic[rightNr] !== undefined) {
    dic[rightNr]++;
  }
});

const sum = Object.keys(dic).reduce((acc, key) => {
  return acc + dic[key] * key;
}, 0);

console.log(sum);
