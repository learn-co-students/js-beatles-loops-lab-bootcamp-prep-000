function theBeatlesPlay(musicians, instruments) {
  var newArray = musicians;

  for (var i = 0; i < newArray.length; i++) {
    newArray[i] = newArray[i] + " plays " + instruments[i];
  }

  return newArray;
}

function johnLennonFacts(array) {
  var i = 0;

  while (i < array.length) {
    array[i] = array[i] + "!!!";
    i++
  }

  return array;
}

function iLoveTheBeatles(n) {
  var newArray = new Array();
  var i = 0;

  do {
    newArray[i] = "I love the Beatles!";
    i++;
  } while (i <= n && n < 15);

  return newArray;
}
