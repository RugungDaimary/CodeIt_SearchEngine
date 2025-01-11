// filepath: /Users/rugungdaimary/Desktop/Mac/Projects/CodeIt_SearchEngine/keywords.js
const fs = require("fs");
const path = require("path");

// Reading the keywords from the keywords.txt file
const keywordsPath = path.join(__dirname, "keywords.txt");
const keywordsStr = fs.readFileSync(keywordsPath, "utf8");

// Splitting the keywords by new line
const keywords = keywordsStr.split("\n");

module.exports = keywords;
