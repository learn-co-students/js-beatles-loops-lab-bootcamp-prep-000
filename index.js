function theBeatlesPlay(musicians, instruments) {
  var pairs = [];

  for (let i = 0; i <= (musicians.length - 1); i++) {
    pairs.push(musicians[i] + " plays " + instruments[i])
  }

  return pairs
}

function johnLennonFacts(facts) {
  var n = 0;

  while (n <= facts.length - 1) {
    facts[n] = facts[n] + "!!!"
    n = n + 1
  }

  return facts
}

function iLoveTheBeatles(n) {
  var strings = []

  do {
    strings.push("I love the Beatles!")
    n = n + 1
  } while (n < 15)

  return strings
}
