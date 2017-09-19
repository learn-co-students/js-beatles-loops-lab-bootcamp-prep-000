function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  for (let i = 0; i < musicians.length; i++) {
    beatles[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return beatles
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var love = []
  do {
    love.push("I love the Beatles!")
    n += 1
  }
  while (n < 15)
  return love
}
