function theBeatlesPlay(players, instruments) {
  var allPlayers = []
  for (var i = 0; i < players.length; i++ ) {
  allPlayers.push(players[i] + " plays " + instruments[i]);
}
return allPlayers
}

function johnLennonFacts(facts) {
     var newFacts = [];
     var i = 0;
     while (i < facts.length) {
          newFacts.push(facts[i] +"!!!");
         i++;
     }
     return newFacts
 }

function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++
  } while (n < 15);
  return love
}
