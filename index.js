function theBeatlesPlay(musicians, instruments) {
  var musiciansArray = [];
   for (var i = 0; i < 4; i++) {
    (musicians[i] + " plays " + instruments[i]);
    musiciansArray.push(musicians[i] + " plays " + instruments[i])
   }
    return musiciansArray
}

function johnLennonFacts(facts) {
  var happyFacts = []
  var i = 0
  while(i < facts.length) {
    happyFacts.push(facts[i] + "!!!")
    i++
  }
  return happyFacts
}

function iLoveTheBeatles(n) {
  var beatlesLove = []
  do {beatlesLove.push("I love the Beatles!")
  n++
}
  while(n < 15);

  return beatlesLove
}
