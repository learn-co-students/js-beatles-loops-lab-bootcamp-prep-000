function theBeatlesPlay(players, instruments) {
  var allPlayers = [];
  for (var i = 0; i < players.length; i++) {
    allPlayers.push(players[i] + " plays " + instruments[i])
  }
  return allPlayers;
}

function johnLennonFacts(facts) {;
  var factsArray = []
  let i = 0;
  while (i < facts.length) {
    factsArray.push(`${facts[i]}!!!`)
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(number) {
  var empty = [];
  do {
    empty.push("I love the Beatles!");
    number++
  } while (number < 15)
  return empty;
}
