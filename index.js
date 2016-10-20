function theBeatlesPlay (musicians, instruments) {
  var array = [];
  var i = 0;
  for (var i = 0; i<musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    array.push(string);
  }
  return array;
}
function johnLennonFacts(array) {
  var stringArray = [];
  var i = 0;
  while (i<array.length) {
    stringArray = array[i] + "!!!";
    array[i] = stringArray;
    i++;
  }
  return array;
}

function iLoveTheBeatles (number) {
  var array = [];
  var i = 0;
  do {
    array.push("I love the Beatles!");
  } while (i<number && i<15) {
    array.push("I love the Beatles!");
    i++;
  }
  return array;
}
