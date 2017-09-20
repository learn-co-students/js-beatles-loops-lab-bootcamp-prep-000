function theBeatlesPlay(musicians, instruments) {
  var musStrings = []

  for (var i = 0; i < musicians.length; i++) {
    musStrings.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return musStrings
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`
    i += 1
  }

  return facts
}

function iLoveTheBeatles(n) {
  var loves = []
  do {
    loves.push("I love the Beatles!")
    n += 1
  } while (n < 15)

  return loves
}
