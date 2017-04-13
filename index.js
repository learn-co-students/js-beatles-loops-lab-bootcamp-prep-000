function theBeatlesPlay(musicians, instruments) {
  var x = [];
  for (var i = 0; i < 4; i++) {
    x.push(musicians[i] + " plays " + instruments[i]);
  }
  return x;
}

function johnLennonFacts(facts) {
  var factsPlus = [];
  var i = 0;
  while (i < facts.length) {
    factsPlus.push(facts[i] + "!!!");
    i++;
  }
  return factsPlus;
}

function iLoveTheBeatles(n){
  var x = [];

  do {
    x.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return x;
}
