// add solution here

function theBeatlesPlay(musicians, instruments) {
  var plays = []
  for (var i = 0; i < musicians.length; i++) {
    plays.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return plays
}

function johnLennonFacts(facts) {
  var wow = []
  for (var i = 0; i < facts.length; i++) {
    wow.push(`${facts[i]}!!!`)
  }
  return wow
}

function iLoveTheBeatles(n) {
  var loves = []
  do {
    loves.push("I love the Beatles!")
    n++
  } while (n < 15)
  return loves
}
