function theBeatlesPlay(arrM, arrI) {
  let arr = [];
  
  for (let i = 0; i < arrM.length; i++) {
    arr.push(`${arrM[i]} plays ${arrI[i]}`);
  }
  return arr;
}

function johnLennonFacts (arrF) {
  let arr = [];
  let x = 0;
  while (x < arrF.length) {
    arr.push(`${arrF[x]}!!!`);
    x++;
  }
  return arr;
}

function iLoveTheBeatles (num) {
  let arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return arr;
}