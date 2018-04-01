function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for(var i = 0; i < instruments.length; i++) {
    empty.push(musicians[i] + " plays " + instruments[i])
  }
  return empty
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

function iLoveTheBeatles(number) {
  var empty = []
  do {
    empty.push("I love the Beatles!") 
    number++
  } while (number <= 14)
  return empty
}
