function theBeatlesPlay(musicians, instruments) {
  const ret = [];
  for (var i = 0; i < musicians.length; i++) {
    ret.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return ret;
}

function johnLennonFacts(facts) {
  const ret = [];
  while (facts.length) {
    ret.push(facts.shift() + "!!!");
  }
  return ret;
}

function iLoveTheBeatles(n) {
  const ret = []
  do {
    ret.push("I love the Beatles!")
    n++;
  } while (n < 15)
  return ret;
}
