// // Description: This file contains the code to read the IDF values from the IDF.txt file and store them in an array.
// const fs = require("fs");
// // Reading the IDF values from the IDF.txt file
// const idfstr = fs.readFileSync("IDF.txt").toString();
// // Splitting the IDF values by new line
// const idf = idfstr.split("\n");

// // Converting the IDF values to numbers
// for (let i = 0; i < idf.length; i++) {
//   idf[i] = Number(idf[i]);
// }
// // console.log(idf);

// module.exports = idf;

const fs = require("fs");

try {
  // Reading the IDF values from the IDF.txt file
  const idfstr = fs.readFileSync("IDF.txt").toString();

  // Splitting the IDF values by new line and trimming whitespace
  const idf = idfstr.split("\n").map((line) => Number(line.trim()));

  // Exporting the IDF array
  module.exports = idf;
} catch (err) {
  console.error("Error reading IDF file:", err);
  module.exports = [];
}
