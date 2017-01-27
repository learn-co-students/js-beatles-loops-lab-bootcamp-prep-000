function theBeatlesPlay(musicians, instruments) {
  var Beatles = [];
  for(var i = 0; i < musicians.length; i++) {
    Beatles.push(musicians[i] + " plays " + instruments[i])
  }
  return Beatles
}

function johnLennonFacts(facts) {
  var newFacts = [];
  for(var i = 0; i < facts.length; i++) {
    newFacts.push(facts[i] + "!!!")
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  var loveBeatles = [];
  do {
    loveBeatles.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return loveBeatles
}
