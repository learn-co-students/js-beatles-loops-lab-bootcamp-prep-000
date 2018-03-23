function theBeatlesPlay(musicians, instruments) {
  var theBeatles = [];

  for (var i = 0; i < musicians.length; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}

function johnLennonFacts(facts) {
  var johnLennon = [];

  for (var i = 0; i < facts.length; i++) {
    johnLennon.push(`${facts[i]}!!!`);
  }
  return johnLennon;
}

function iLoveTheBeatles(number) {
  var theBeatles = [];

  do {
    theBeatles.push('I love the Beatles!')
    number++;
  } while (number < 15)

  return theBeatles;
}
