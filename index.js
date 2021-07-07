// add solution here
function theBeatlesPlay(players, instruments) {
  var allPlayers = [];
  for (let i = 0; i < players.length; i++) {
    allPlayers.push(players[i] + " plays " + instruments[i])
  }
  return allPlayers
}


var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
    while (i < facts.length) {
      newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    number += 1
  } while (number < 15);
  return array;
}
