function theBeatlesPlay(musicians, instruments) {
  var instrumentsPlayed = []
  for (var i = 0; i < musicians.length; i++) {
    instrumentsPlayed.push(musicians[i] + ' plays ' + instruments[i])
  }
  return instrumentsPlayed
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts
}

function iLoveTheBeatles(int) {
  var emptyArray = []
  do {
    emptyArray.unshift("I love the Beatles!");
    int++;
  } while (int < 15)
  return emptyArray
}
