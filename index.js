function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
      var member = musicians[i]
      var instrument = instruments[i]
      array.push(`${member} plays ${instrument}`)
    }
  return array
}

function johnLennonFacts(facts) {
  var i = 0
  var newFacts = []
  while (i < facts.length) {
    var fact = facts[i]
    var newFact = fact + "!!!"
    newFacts.push(newFact)
    i++
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  var beatlesLove = []
  do {
    beatlesLove.push("I love the Beatles!")
    n++
  } while (n < 15)
  return beatlesLove
}
