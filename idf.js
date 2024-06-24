// Description: This file contains the code to read the IDF values from the IDF.txt file and store them in an array.
const fs = require("fs");
// Reading the IDF values from the IDF.txt file
const idfstr = fs.readFileSync("IDF.txt").toString();
// Splitting the IDF values by new line
const idf = idfstr.split("\n");

// Converting the IDF values to numbers
for (let i = 0; i < idf.length; i++) {
  idf[i] = Number(idf[i]);
}
// console.log(idf);

module.exports = idf;