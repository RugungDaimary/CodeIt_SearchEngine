const fs = require("fs");
const path = require("path");

const tfPath = path.join(__dirname, "../data/TF.txt");
const N = 3023;
let tf = new Array(N);

for (let i = 0; i < N; i++) {
  tf[i] = new Array(0);
}

const TF = fs.readFileSync(tfPath, "utf8");
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
