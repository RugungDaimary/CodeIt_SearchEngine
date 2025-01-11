const fs = require("fs");
const path = require("path");

// Reading the IDF values from the IDF.txt file
const idfPath = path.join(__dirname, "IDF.txt");
const idfstr = fs.readFileSync(idfPath).toString();

// Splitting the IDF values by new line
const idf = idfstr.split("\n");

// Converting the IDF values to numbers
for (let i = 0; i < idf.length; i++) {
  idf[i] = Number(idf[i]);
}

module.exports = idf;
