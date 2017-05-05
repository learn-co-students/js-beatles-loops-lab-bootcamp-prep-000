function theBeatlesPlay(musicians,instruments) {
  var bandRole = {};
  for (i = 0; i <= musicians.length; i++) {
    bandRole = [...bandRole,[`${musicians[i]} + "plays " + ${instruments[i]}"`]];
  }
  return bandRole;
}

function johnLennonFacts(facts) {
  while (i <= facts.length) {
    facts = [...facts,`${facts[i]} + "!!!"`];
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var lotsOfLove = {};
  do {
    lotsOfLove = [...lotsOfLove,"I love the Beatles!"]
    n++;
  } while (n < 15);
  return lotsOfLove;
}
