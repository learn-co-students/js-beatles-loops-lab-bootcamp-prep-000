function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = new Array();
  for (var i = 0; i < musicians.length; i++) {
    beatlesArray.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesArray
}

function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] += "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(n) {
  var myArray = [];
  do {
    myArray.push("I love the Beatles!");
    ++n
  } while (n < 15) {
    return myArray
  }
}
