function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  var ml = musicians.length;

  for (var i = 0; i < ml; i++) {
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }

  return arr;
}

function johnLennonFacts(array) {
  var l = array.length,
      arr = [];

  for (var i = 0; i < l; i++) {
    arr.push(array[i] + '!!!');
  }

  return arr;
}

function iLoveTheBeatles(n) {
  var arr = [];

  do {
    arr.push('I love the Beatles!');
    n++;
  } while (n < 15);

  return arr;
}
