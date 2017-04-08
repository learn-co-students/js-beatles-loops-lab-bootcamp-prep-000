function theBeatlesPlay(musicians, instruments) {
  var musiciansPlay = [];

  for (var i = 0; i < musicians.length; i++) {
    musiciansPlay[i] = `${musicians[i]} plays ${instruments[i]}`;
  }

  return musiciansPlay;
}

function johnLennonFacts(facts) {
  var i = 0
  var excitedFacts = []

  while (i < facts.length) {
    excitedFacts[i] = `${facts[i]}!!!`
    i++
  }
  return excitedFacts
}

function iLoveTheBeatles(n) {
  var beatlesStrings = [];

  do {
    beatlesStrings.push("I love the Beatles!")
    n++
  } while (n < 15);

  return beatlesStrings;
}
