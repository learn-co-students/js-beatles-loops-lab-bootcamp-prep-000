function theBeatlesPlay(players, instruments) {
  var allPlayers = [];
  for (var i = 0; i < players.length; i++)
    allPlayers.push(players[i] + " plays " + instruments[i]);
  return allPlayers;
}

function johnLennonFacts(facts) {
  var excitingfacts = []
  var i = 0;
  while (i < facts.length) {
        excitingfacts.push(facts[i] +"!!!");
        i++;
     }
  return excitingfacts;
  }

function iLoveTheBeatles(n) {
  var beatles = [];
  do{
      beatles.push("I love the Beatles!");
      n++
  } while (n < 15);
  return beatles;
}
