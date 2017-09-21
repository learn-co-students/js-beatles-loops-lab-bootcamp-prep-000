function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for (var i = 0; i < musicians.length; i++) {
    empty.push(musicians[i] + " plays " + instruments[i])
  }
  return empty
}

function johnLennonFacts(array) {
var facts = [];
var i = 0;
var amazingFacts = [];
var exclamationPoints = "!!!";
  while(i < array.length) {
    amazingFacts.push(array[i] + exclamationPoints);
    i++;
  }
  return amazingFacts
}

function iLoveTheBeatles(n) {
  var beatleLove = []
  var i = n
  do {
    i++;
    beatleLove.push("I love the Beatles!")
  } while (i < 15);
  return beatleLove
}
