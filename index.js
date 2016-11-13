function theBeatlesPlay(musicians, instruments) {
  var whoPlays = []
  for (let i = 0; i < musicians.length; i++) {
    whoPlays.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return whoPlays
}

function johnLennonFacts(facts) {
  var exFacts = facts
  var i = 0
  while (i < exFacts.length) {
    exFacts[i] += "!!!"
    i++
  }
  return exFacts
}

function iLoveTheBeatles(n) {
  var love = []
  do {
    love.push("I love the Beatles!")
    n++
  } while (n < 15)
  return love
}
