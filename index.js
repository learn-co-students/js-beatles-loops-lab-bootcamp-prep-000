function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
    for (var i=0; i < players.length; i++) {
        allPlayers.push(players[i] + " plays " + instruments[i]);
    }
     return allPlayers;
 }

 function johnLennonFacts(facts){
  var JFacts = [];
  var i = 0;

  while (i < facts.length) {

    JFacts.push(facts[i] + "!!!");
    i++;
  }
  return JFacts;
}

function iLoveTheBeatles(number) {

  var loveB = [];

  do {
    loveB.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return loveB;


}
