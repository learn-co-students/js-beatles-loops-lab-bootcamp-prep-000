function theBeatlesPlay(arrMusic, arrInst) {
  var newArr = [];
  for (var i = 0; i < arrMusic.length; i++) {
    newArr.push(`${arrMusic[i]} plays ${arrInst[i]}`)
  }
  return newArr;
}

function johnLennonFacts(arrFacts) {
  var newArr = [];
  for (var i = 0; i < arrFacts.length; i++) {
    newArr.push(arrFacts[i] + '!!!');
  }
  return newArr;
}

var iLoveTheBeatles = myNum => {
  var newArr = [];
  do {
    newArr.push("I love the Beatles!");
    myNum++;
  } while (myNum < 15);
  return newArr;
}