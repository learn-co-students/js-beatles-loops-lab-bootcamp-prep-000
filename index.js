function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(factsArr) {
  for (var i = 0; i < factsArr.length; i++) {
    factsArr[i] += '!!!';
  }
  return factsArr;
}

function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return arr;
}
