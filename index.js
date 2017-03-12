function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push (musicians[i] + " plays " + instruments[i] )
  }
  return emptyArray
}

function johnLennonFacts(array) {
  var i = 0;
  var newArray = [];
  while (i < array.length) {
    newArray.push (array[i]+ "!!!");
    i++
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    n++;
  }
  while (n < 15)
  return emptyArray;
}
