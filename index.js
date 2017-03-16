function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = [];

  for (let i = 0; i < musicians.length; i++) {
    beatlesPlay.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesPlay;
}

function johnLennonFacts(facts) {
  var index = 0
  var curFact = []
  while (index < facts.length) {
      curFact.push(facts[index] + "!!!");
      index++;
}
return curFact;
}

function iLoveTheBeatles(n) {
  var emptyArr = []
  do {
    emptyArr.push("I love the Beatles!");
    n++;
  }
    while (n < 15);
    return emptyArr;
  }