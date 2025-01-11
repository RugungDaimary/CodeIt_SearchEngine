const fs = require("fs");
const path = require("path");

const titlesPath = path.join(__dirname, "../data/problem-titles.txt");
const titlesstr = fs.readFileSync(titlesPath, "utf8");
const titles = titlesstr.split("\n");

module.exports = titles;
