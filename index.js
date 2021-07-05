function theBeatlesPlay(arrMus, arrInst) {
  var emptyArr = [];
  for (let i = 0; i < arrMus.length; i++) {
      emptyArr.push(`${arrMus[i]} plays ${arrInst[i]}`)
  }
  return emptyArr
}

function johnLennonFacts(arr) {
  let i = 0;
  while (i < arr.length) {
    arr[i] += '!!!'
    i++
  }
  return arr;
}

function iLoveTheBeatles(num) {
  let newArr = [];
  do {
      newArr.push("I love the Beatles!")
      num++
  }
  while (num < 15);
  return newArr
}