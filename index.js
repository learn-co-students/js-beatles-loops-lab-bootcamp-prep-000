function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])    
  }
  return newArray;
}

function johnLennonFacts(array) {
  var newArray = [];
  while (true) {
    for (var i = 0; i < array.length; i++) {
      newArray.push(array[i] + '!!!');
    }
    break;
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push('I love the Beatles!');
    n += 1;
  } while (n < 15);
  return newArray;
}