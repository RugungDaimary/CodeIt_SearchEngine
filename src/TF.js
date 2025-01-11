const fs = require("fs");
const N = 3023;
// const W = 37641;
let tf = new Array(N);

for (let i = 0; i < N; i++) {
  tf[i] = new Array(0);
}

const TF = fs.readFileSync("TF.txt").toString();
// fs.readFileSync("TF.txt") returns a Buffer object representing the contents of the file "TF.txt". This Buffer object is then converted to a string using .toString().
// So, in this case, the Buffer is a temporary holding place for the binary data read from the file, before it's converted to a string
// console.log("Printing TF array",TF);
const temp = TF.split("\n");
for (let k = 0; k < temp.length; k++) {
  const arr = temp[k].split(" ");
  const i = Number(arr[0]);
  const j = Number(arr[1]);
  const val = Number(arr[2]);
  tf[i].push({
    id: j,
    val: val,
  });
}

module.exports = tf;
