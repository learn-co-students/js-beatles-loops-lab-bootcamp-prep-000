function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for(var i=0; i<musicians.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}
function johnLennonFacts(facts) {
  var newArr = [];
var i = 0;
  while(i < facts.length) {
    newArr.push(facts[i] + "!!!");
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(n) { var arr = [];
  do {
    arr.push('I love the Beatles!');
    n++;
  } while(n < 15);
  return arr;
}
