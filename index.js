function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (var z = 0; z < musicians.length; z++) {
    empty.push(musicians[z] + " plays " + instruments[z])
  }
  return empty
}

function johnLennonFacts (facts) {
var sortafacts = []
for (var z = 0; z < facts.length; z++){
  sortafacts.push(facts[z] + "!!!")
}return sortafacts
}

function iLoveTheBeatles(number) {
  var empty = [];
          do {
    empty.push("I love the Beatles!"); number++
  } while (number < 15);
  return empty
}
