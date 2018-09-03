function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0; i < 4; i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles;
}

function johnLennonFacts(array) {
  var i = 0;
  var exclamation = [];
  while (i < array.length) {
    exclamation.push(`${array[i]}!!!`)
    i++;
  }
  return exclamation;
}

function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return arr;
}
