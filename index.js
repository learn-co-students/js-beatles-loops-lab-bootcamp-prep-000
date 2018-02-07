function theBeatlesPlay(musicians, instruments){
  var fact = [];
  for (var i = 0; i < musicians.length; i++){
    fact.push(musicians[i] + " plays " + instruments[i])
  }
  return fact;
}

function johnLennonFacts(facts){
  var moreFacts = [];
  var i = 0
  while (i < facts.length){
    moreFacts.push(facts[i] + "!!!")
    i++;
  }
  return moreFacts;
}

function iLoveTheBeatles(i){
  var facts = [];
  do {
    facts.push("I love the Beatles!");
    i++
  } while (i < 15);
  return facts
}
