function theBeatlesPlay(arrMusicians, arrInstruments) {
  var arrSentence = [];
  for(var i = 0; i < arrMusicians.length; i++) {
    arrSentence.push(`${arrMusicians[i]} plays ${arrInstruments[i]}`)
  }
  return arrSentence;
}

function johnLennonFacts(array) {
  var i = 0;
  var newArray = [];

  while(i < array.length) {
    newArray.push(array[i] + '!!!');
    i += 1;
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var arr = [];

  do {
    arr.push('I love the Beatles!');
    n += 1;
  } while(n < 15);
  return arr;
}
