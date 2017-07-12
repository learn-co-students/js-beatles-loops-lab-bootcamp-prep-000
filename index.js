function theBeatlesPlay(musicians, instruments) {
  var pairs = [];

  for (let i = 0; i < musicians.length; i++) {
    pairs.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return pairs
}

function johnLennonFacts(facts) {
  var n = 0;

  while (n < facts.length) {
    facts[n] = `${facts[n]}!!!`
    n++
  }

  return facts
}

function iLoveTheBeatles(n) {
  var strings = []

  do {
    strings.push("I love the Beatles!")
    n++
  } while (n < 15)

  return strings
}
