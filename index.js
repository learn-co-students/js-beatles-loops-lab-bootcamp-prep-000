function theBeatlesPlay(players, instruments) {
  var allPlayers = [];
  for (var i = 0; i < players.length; i++)
    allPlayers.push(players[i] + " plays " + instruments[i]);
  return allPlayers;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
     }
  return newFacts;
  }

function iLoveTheBeatles(n) {
  var beatles = [];
  do{
      beatles.push("I love the Beatles!");
      n++
  } while (n < 15);
  return beatles;
}
