function theBeatlesPlay(musicians, instruments) {
  let strings = [];
  for (let n = 0; n < musicians.length; n += 1) {
    strings.push(`${musicians[n]} plays ${instruments[n]}`)
  }
  return strings
}

function johnLennonFacts(facts) {
  let exclamation = [];
  let x = 0;
  while (exclamation.length < facts.length) {
    exclamation.push(`${facts[x]}` + '!!!');
    x += 1;
  }
  return exclamation
}

function iLoveTheBeatles(i) {
  let array = []
  do {array.push("I love the Beatles!");
    i += 1;
  } while (i < 15)
  return array
}
