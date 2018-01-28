function theBeatlesPlay(musicians, instruments) {
  const theBeatles = [];
  for(let i = 0; i < musicians.length; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i = i + 1;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  const loveBeatles = [];
  do {
    loveBeatles.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return loveBeatles;
}
