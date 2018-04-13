function theBeatlesPlay(musicians, instruments) {
  var resultArray = [];
  for (let n = 0; n < musicians.length; n++) {
    resultArray[n] = `${musicians[n]} plays ${instruments[n]}`;
  }
  return resultArray;
}

function johnLennonFacts(facts) {
  var resultArray = [];
  var n = 0;
  while (facts[n]) {
    resultArray[n] = `${facts[n]}!!!`;
    n++;
  }
  return resultArray;
}

function iLoveTheBeatles(number) {
  var resultArray = [];
  var n = 0;
  do {
    resultArray[n] = 'I love the Beatles!';
    n++;
    number++;
  } while (number < 15)
  return resultArray;
}