function theBeatlesPlay(arrMusicians, arrInstruments) {
  var newArr = []

  for(let i = 0; i < arrMusicians.length; i++) {
    newArr.push(`${arrMusicians[i]} plays ${arrInstruments[i]}`);
  }
  return newArr;
}

function johnLennonFacts(arrFacts) {
  var newArr = [];
  while(arrFacts.length > 0) {
    newArr.push(arrFacts.shift() + "!!!");
  }
  return newArr;
}

function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while(n < 15)
  return arr;
}
