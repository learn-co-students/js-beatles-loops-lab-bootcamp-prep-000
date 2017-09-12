function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  var i;
  var l = musicians.length;
  for (i = 0 ; i < l; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatles;
}

function johnLennonFacts(array) {
  var newArray = [];
  while (array.length) {
    newArray.push(array.shift() + '!!!');
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return array;
}
