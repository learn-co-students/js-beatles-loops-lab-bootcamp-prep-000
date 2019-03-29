
function theBeatlesPlay(musicianArray, instrumentArray) {
  let arr = [];
  
  for (let i = 0; i < musicianArray.length; i++) {
    arr.push(`${musicianArray[i]} plays ${instrumentArray[i]}`);
  }
  return arr;
}

function johnLennonFacts(arr) {
  let i = 0;
  while (i < arr.length) {
    arr[i] += "!!!";
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  let arr = [];
  
  do {
    arr.push("I love the Beatles!");
    num++
  } while (num < 15);
  
  return arr;
}