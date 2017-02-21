function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(array) {
  var second = [];
  var x = array.length;
  while (x > 0, x--) {
    second.unshift(array[x] + "!!!");
  }
  return second;
}

function iLoveTheBeatles(number) {
  var i = [];
  do {
    i.push('I love the Beatles!'); number++;
  } while (number < 15); {
  }
  return i;
}
