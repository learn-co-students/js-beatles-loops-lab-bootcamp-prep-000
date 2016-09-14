function theBeatlesPlay(musicians, instruments) {
  var arr1 = [];
  for (var i = 0; i < musicians.length; i++) {
    arr1.push(musicians[i] + " plays " + instruments[i])
  }
  return arr1
}

function johnLennonFacts(array) {
  var arr2 = [];
  while (array.length > 0) {
    arr2.unshift(array.pop() + "!!!");
  }
  return arr2
}

function iLoveTheBeatles(n) {
  var arr3 = [];
  do {
    arr3.push("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return arr3
}
