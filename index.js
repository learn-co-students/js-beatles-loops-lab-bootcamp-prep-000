function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
   for (var i=0; i < players.length; i++) {
       allPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}

function johnLennonFacts(Array) {
  var newFacts = [];
   var i = 0;
   while (i < Array.length) {
       newFacts.push(Array[i] +"!!!");
       i++;
   }
    return newFacts;
}

function iLoveTheBeatles(Number) {
var love = [];
  do {love.push("I love the Beatles!");
  Number++;
  } while(Number < 15);
return love;
}
 