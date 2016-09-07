function theBeatlesPlay(musicians, instruments) {
  // variable = []
  // loop over array of musicians
  var beatles = [];

  for (var i = 0; i < musicians.length; i++) {
    beatles[i] = (`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatles;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var beatlesLove = [];
  do {
    beatlesLove.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return beatlesLove;
}
