const fs = require("fs");
const path = require("path");

const urlsPath = path.join(__dirname, "../data/problem-urls.txt");
const urlsstr = fs.readFileSync(urlsPath, "utf8");
const urls = urlsstr.split("\n");

module.exports = urls;
