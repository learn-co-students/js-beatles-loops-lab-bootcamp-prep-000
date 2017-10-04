function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let x = 0; x < musicians.length && x < instruments.length; x++) {
    array.push(`${musicians[x]} plays ${instruments[x]}`);
  }
  return array;
}

function johnLennonFacts(array) {
  var x = array.length;
  while (x--) {
    array[x] = `${array[x]}!!!`;
  }
  return array;
}

function iLoveTheBeatles(x) {
  var array = [];
  do {
    array.push('I love the Beatles!');
  } while (x-- && x < 15);
  return array;
}
