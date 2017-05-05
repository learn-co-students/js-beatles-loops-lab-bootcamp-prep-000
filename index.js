function theBeatlesPlay(musicians,instruments) {
  var bandRole = {};
  for (var i = 0; i <= (musicians.length - 1); i++) {
    bandRole = [...bandRole,`${musicians[i]} plays ${instruments[i]}`];
  }
  return bandRole;
}

function johnLennonFacts(facts) {
  var i = 0;
  var factsPlus = [];
  while (i <= (facts.length - 1)) {
    factsPlus.push(`${facts[i]}!!!`);
    i++;
  }
  return factsPlus;
}

function iLoveTheBeatles(n) {
  var lotsOfLove = {};
  do {
    lotsOfLove = [...lotsOfLove,"I love the Beatles!"]
    n++;
  } while (n < 15);
  return lotsOfLove;
}
