function theBeatlesPlay(musicians, instruments) {
  var facts = [];
  for (var i=0; i<(musicians.length); i++) {
    facts.push(musicians[i] + " plays " + instruments[i]);
  }
  return facts;
}

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
  var ilove = [];
  do {
    ilove.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
return ilove;
}