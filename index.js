function theBeatlesPlay (musicians, instruments) {
  var allPlayers = [];
  for (let i=0; i<musicians.length; i++) {
    allPlayers.push(musicians[i] + " plays " + instruments[i]);
  }
  return allPlayers;
}

function johnLennonFacts (facts) {
  var allFacts = [];
  var i=0;
  while (i < facts.length) {
    allFacts.push(facts[i] + "!!!");
    i++;
  }
  return allFacts;
}

function iLoveTheBeatles (number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}
