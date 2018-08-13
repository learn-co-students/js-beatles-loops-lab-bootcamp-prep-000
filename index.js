function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (var i = 0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i = i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var result = [];
  do {
    result.push("I love the Beatles!");
  } while (number < 15);
  return result;
}