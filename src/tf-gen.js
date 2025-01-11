const { removeStopwords } = require("stopword");
const removePunc = require("remove-punctuation");
const fs = require("fs");
const path = require("path");

// total documents
const N = 3023;

// Reading documents from the data/Problems directory
let documents = [];
for (let i = 1; i <= N; i++) {
  const str = path.join(__dirname, "../data/Problems");
  const str1 = path.join(str, `problem_text_${i}.txt`);
  const question = fs.readFileSync(str1).toString();
  documents.push(question);
}

// Extracting keywords from documents
let docKeywords = [];
for (let i = 0; i < documents.length; i++) {
  const lines = documents[i].split("\n");
  const docWords = [];
  for (let k = 0; k < lines.length; k++) {
    const temp1 = lines[k].split(" ");
    temp1.forEach((e) => {
      e = e.split("\r");
      if (e[0].length) docWords.push(e[0]);
    });
  }
  const newString = removeStopwords(docWords);
  newString.sort();
  let temp = [];
  for (let j = 0; j < newString.length; j++) {
    newString[j] = newString[j].toLowerCase();
    newString[j] = removePunc(newString[j]);
    if (newString[j] !== "") temp.push(newString[j]);
  }
  docKeywords.push(temp);
}

// Calculating the number of keywords in each document
let sum = 0;
for (let i = 0; i < N; i++) {
  const length = docKeywords[i].length;
  sum += length;
  fs.appendFileSync(path.join(__dirname, "../data/length.txt"), length + "\n");
}

// Storing all the keywords
let keywords = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < docKeywords[i].length; j++) {
    if (keywords.indexOf(docKeywords[i][j]) === -1)
      keywords.push(docKeywords[i][j]);
  }
}

keywords.sort();
const W = keywords.length;
keywords.forEach((word) => {
  fs.appendFileSync(path.join(__dirname, "../data/keywords.txt"), word + "\n");
});

// Calculating the term frequency of keywords for each document
let TF = new Array(N);
for (let i = 0; i < N; i++) {
  TF[i] = new Array(W).fill(0);
  let map = new Map();
  docKeywords[i].forEach((key) => {
    return map.set(key, 0);
  });
  docKeywords[i].forEach((key) => {
    let cnt = map.get(key);
    cnt++;
    return map.set(key, cnt);
  });
  docKeywords[i].forEach((key) => {
    const id = keywords.indexOf(key);
    if (id !== -1) {
      TF[i][id] = map.get(key) / docKeywords[i].length;
    }
  });
}

// Storing the calculated TF values
for (let i = 0; i < N; i++) {
  for (let j = 0; j < W; j++) {
    if (TF[i][j] != 0)
      fs.appendFileSync(
        path.join(__dirname, "../data/TF.txt"),
        i + " " + j + " " + TF[i][j] + "\n"
      );
  }
}

// Calculating the IDF values of the keywords
let IDF = new Array(W);
for (let i = 0; i < W; i++) {
  let cnt = 0;
  for (let j = 0; j < N; j++) {
    if (TF[j][i]) {
      cnt++;
    }
  }
  if (cnt) IDF[i] = Math.log((N - cnt + 0.5) / (cnt + 0.5) + 1) + 1; // BM25 formula
}

IDF.forEach((val) => {
  fs.appendFileSync(path.join(__dirname, "../data/IDF.txt"), val + "\n");
});
