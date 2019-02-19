function theBeatlesPlay(players, instruments) {
  var allPlayers = [];
  for (var i = 0; i < players.length; i++)
  {allPlayers.push (players[i] + " plays " + instruments[i])
}
return allPlayers
}
function johnLennonFacts(facts) {
  var results = [];
  var i = 0;
  while (i < facts.length) {
    results.push(facts[i] + "!!!");
    i++;
  }
  return results;
}
function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}