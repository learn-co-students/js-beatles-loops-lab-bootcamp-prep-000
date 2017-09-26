function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for(var i = 0; i < musicians.length; i++) {
    var mu = musicians[i]
    var ins = instruments[i]
    empty.push(`${mu} plays ${ins}`)
  }
return empty
}

function johnLennonFacts(facts) {
  var i = 0
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts

}

function iLoveTheBeatles(n) {
  var empty = []
  do {
    empty.push("I love the Beatles!")
    n++
  } while(n < 15)

  return empty
}
