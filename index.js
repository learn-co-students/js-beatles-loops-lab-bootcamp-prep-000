function theBeatlesPlay(musicians,instruments) {
  var phrases = []
  for (let i = 0; i < musicians.length; i++) {
    phrases.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return phrases
}

function johnLennonFacts(facts) {
  var factsplus = []
  while (facts.length > 0) {
    factsplus.push(facts[0]+'!!!')
    facts.shift()
  }
  return factsplus
}

function iLoveTheBeatles(times) {
  var beatlemania = []
  do {
    beatlemania.push("I love the Beatles!")
    times++
  } while (times < 15)
  return beatlemania
}