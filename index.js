function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = [];

  for (var i = 0; i < musicians.length; i++) {
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return beatlesPlay;
}

function johnLennonFacts(facts) {
  var exclamation = [];

  var i = 0;
  while (i < facts.length) {
    exclamation.push(`${facts[i]}!!!`);
    i++;
  }

  return exclamation
}

function iLoveTheBeatles(n) {
  var loveTheBeatles = [];

  do {
    loveTheBeatles.push("I love the Beatles!");
    n++;
  } while (n < 15);

  return loveTheBeatles
}
