const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");
const lines = input.split("\n");

const sum = lines.reduce((acc, line) => {
  let order = null;
  const nrs = line.split(" ");
  let validLine = true;

  for (let i = 0; i < nrs.length - 1; i++) {
    let number = parseInt(nrs[i]);
    let nextNumber = parseInt(nrs[i + 1]);

    if (!order) {
      order = number < nextNumber ? "asc" : "desc";
    }

    if (
      (order === "asc" && number > nextNumber) ||
      (order === "desc" && number < nextNumber)
    ) {
      validLine = false;
      break;
    }

    if (number === nextNumber || Math.abs(number - nextNumber) > 3) {
      validLine = false;
      break;
    }
  }

  return validLine ? acc + 1 : acc;
}, 0);

console.log(sum);
