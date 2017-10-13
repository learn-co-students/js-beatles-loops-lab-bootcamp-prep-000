function theBeatlesPlay(musicians, instruments) {
  var band = []
  for (let i = 0; i < musicians.length; i++) {
    band.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return band
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var adulation = []
  do {
    adulation.push("I love the Beatles!")
    n++
  } while (n < 15)
  return adulation
}
