function theBeatlesPlay(musicians, instruments) {
  var beatles = new Array()
  for (var i = 0; i < musicians.length; ++i) {
    beatles.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return beatles;  
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] = array[i] + '!!!'
    ++i
  }
  return array;
}

function iLoveTheBeatles(n) {
  var array = new Array()
  do {
    array.push("I love the Beatles!");
  } while (array.length < n + 1 && n < 15);
  return array;
}