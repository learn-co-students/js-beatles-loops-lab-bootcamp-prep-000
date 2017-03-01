function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for(let i = 0; i < 4; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}

function johnLennonFacts(facts) {
  const shoutFact = []

  let i = 0
  while (i < facts.length) {
    shoutFact.push(`${facts[i]}!!!`)
    i++
  }
  return shoutFact
}

function iLoveTheBeatles(n) {
  var emptyArray = []

  do {
    emptyArray.push(`I love the Beatles!`);
    n++
  } while (n < 15)
  return emptyArray;
}
