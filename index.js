function theBeatlesPlay(musicians, instruments) {
    var allPlayers = [];
    for (var i=0; i < musicians.length; i++) {
       allPlayers.push(musicians[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}
function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while(facts.length > i) {
     newFacts.push(facts[i] + "!!!");
     i++;
  }
return newFacts
}
function iLoveTheBeatles(n) {
  var beattle = [];
  do { beattle.push("I love the Beatles!")
n++
}
  while (n < 15);
  return beattle;

  }
