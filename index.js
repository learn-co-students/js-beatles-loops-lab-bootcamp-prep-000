function theBeatlesPlay(musicians, instruments) {
  var facts = [];
  for (var i = 0; i < musicians.length; i++) {
    facts.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return facts
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
  var arr = []
  do {
    arr.push("I love the Beatles!")
    n += 1
  } while (n < 15);
  return arr
}