function theBeatlesPlay(museArr, insArr) {
  let arr = [];
  for (let i in museArr) {
    arr.push(`${museArr[i]} plays ${insArr[i]}`)
  }
  return arr;
}

function johnLennonFacts(arr) {
  let x = 0;
  while (x < arr.length) {
    arr[x] += '!!!';
    x++;
  }
  return arr;
}


function iLoveTheBeatles(num) {
  let luv = [];
  do {
    luv.push("I love the Beatles!");
    ++num;
  } while (num < 15);
  return luv;
}