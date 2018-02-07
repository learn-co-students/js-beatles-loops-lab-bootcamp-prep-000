function theBeatlesPlay(musicians, instruments) {
  var sentences = [];
  
  for(var i = 0; i < musicians.length; i++) {
    sentences.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return sentences;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  
  for(var i = 0; i < facts.length; i++) {
    newFacts.push(facts[i] + "!!!");
  }
  return newFacts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while(n < 15);
  
  return array;
}