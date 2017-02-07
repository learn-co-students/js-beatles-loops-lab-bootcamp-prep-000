function theBeatlesPlay(musicians, instruments) {
  var musAndInst = [];
  for(let i = 0; i < musicians.length; i++) {
    musAndInst = [...musAndInst, `${musicians[i]} plays ${instruments[i]}`]
  }
  return musAndInst
}

function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++;
  }
  return facts
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array = [...array, "I love the Beatles!"]
    number++;
  } while(number < 15)
  return array
}
