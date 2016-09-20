function theBeatlesPlay(musicians, instruments) {
var beatles = [];
for (var i=0; i<musicians.length; i++) {
  beatles.push(musicians[i] + " plays " + instruments[i]);
}
return beatles;
}

function johnLennonFacts(array) {
  var i=0;
while (i < array.length) {
  array[i] = array[i] + "!!!";
  i++;
}
return array;
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {emptyArray.push("I love the Beatles!"), number++}
  while (number < 15);
  return emptyArray;

}
