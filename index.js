function theBeatlesPlay(musicians, instruments) {
  var info = [];
  for (var i = 0; i < musicians.length; i++) {
    info.push(musicians[i] + " plays " + instruments[i]);
  } // end for
  return info;
}

function johnLennonFacts(factsArr) {
  var newFacts = [], i = 0;
  while (i < factsArr.length) {
    newFacts.push(factsArr[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n) {
  var arr = [], count = 0;

  do {
    arr.push("I love the Beatles!");
    if (count === n) break;
    count ++;
  } while (n < 15);
  return arr;
}
