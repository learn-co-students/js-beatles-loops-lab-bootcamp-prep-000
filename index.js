function theBeatlesPlay(musicians, instruments) {
  var musiciansPlay = []
  for (let n=0; n<4; n++) {
    musiciansPlay.push(musicians[n] + " plays " + instruments[n])
  }
  return musiciansPlay;
}

function johnLennonFacts(facts) {
  var n = 0;
  var factsLength = facts.length;
  var exclamation = [];
      while (factsLength > n) {
      exclamation.push(facts[n] + "!!!");
      n++;
    }
  return exclamation;
}

function iLoveTheBeatles(n) {
var array = [];
    do {array.push ("I love the Beatles!");
    n++;
  }
    while (n < 15);
return array
}
