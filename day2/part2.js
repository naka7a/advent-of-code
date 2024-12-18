const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");
const lines = input.split("\n");

function isValidSequence(numbers) {
  let order = null;

  for (let i = 0; i < numbers.length - 1; i++) {
    let number = numbers[i];
    let nextNumber = numbers[i + 1];

    if (number === nextNumber) return false;

    if (!order) {
      order = number < nextNumber ? "asc" : "desc";
    }

    if (
      (order === "asc" && number > nextNumber) ||
      (order === "desc" && number < nextNumber)
    ) {
      return false;
    }

    if (Math.abs(number - nextNumber) > 3) {
      return false;
    }
  }

  return true;
}

const sum = lines.reduce((acc, line) => {
  const numbers = line.split(" ").map(Number);

  if (isValidSequence(numbers)) return acc + 1;

  return numbers.some((_, i) =>
    isValidSequence(numbers.filter((_, j) => j !== i))
  )
    ? acc + 1
    : acc;
}, 0);

console.log(sum);
