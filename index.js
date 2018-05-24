function theBeatlesPlay(players, instruments) {
  var beatlesPlayers = []
  for (var i = 0; i < players.length; i++) {
    beatlesPlayers.push(players[i] + " plays " +instruments[i])
  }
  return beatlesPlayers
}

function johnLennonFacts() {
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  var newFacts = []
  var i = 0 
  while (i < facts.length)
{
  newFacts.push(facts[i] + "!!!")
}
  return newFacts
}