// add solution here
function theBeatlesPlay(musicians, instruments){
    var allPlayers = [];
    for (var i=0; i < musicians.length; i++){
        allPlayers.push(musicians[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (i < facts.length){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return newArray;
}
