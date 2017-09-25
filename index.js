function theBeatlesPlay(musicians, instruments) {
  var plays = []
  for (let i = 0; i < musicians.length; i++) {
    plays.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return plays
}

function johnLennonFacts(facts) {
  let countdown = facts.length - 1
  var jLFacts = []
  while (countdown >= 0) {
    jLFacts.unshift(`${facts[countdown]}!!!`)
    --countdown
  }
  return jLFacts
}

function iLoveTheBeatles(n) {
  var iLove = []
  do {
    iLove.push("I love the Beatles!")
    n++
  } while (n < 15)
  return iLove
}
