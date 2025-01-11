const fs = require("fs");
const path = require("path");

const lengthPath = path.join(__dirname, "../data/length.txt");
const lengthstr = fs.readFileSync(lengthPath, "utf8");
const length = lengthstr.split("\n");

for (let i = 0; i < length.length; i++) {
  length[i] = Number(length[i]);
}

module.exports = length;
