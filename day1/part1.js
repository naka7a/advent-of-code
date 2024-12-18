const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

const leftNrs = [];
const rightNrs = [];

input
  .split("\n")
  .filter((line) => line.trim() !== "")
  .map((line) => {
    const [leftNr, rightNr] = line.split(/\s+/);
    leftNrs.push(Number(leftNr));
    rightNrs.push(Number(rightNr));
  });
leftNrs.sort((a, b) => a - b);
rightNrs.sort((a, b) => a - b);

const sum = leftNrs.reduce((acc, curr, index) => {
  return acc + Math.abs(curr - rightNrs[index]);
}, 0);

console.log(sum);
