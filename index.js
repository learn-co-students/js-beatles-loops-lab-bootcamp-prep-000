function theBeatlesPlay(players, instruments) {
  var newArray = [];
  for (var i = 0; i < players.length; i++) {
    newArray.push(players[i] + " plays " + instruments[i])
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  for (var i = 0; i < facts.length; i++) {
    newFacts.push(facts[i] + "!!!");
  }
  return newFacts;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
  } while (++n < 15);
  return newArray;
}
