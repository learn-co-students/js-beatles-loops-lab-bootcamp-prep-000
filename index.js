function theBeatlesPlay(musicians, instruments) {
  var beatlesPlayArray = []
  for (var i = 0; i < 4; i++) {
    beatlesPlayArray.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return beatlesPlayArray
}

function johnLennonFacts(facts) {
  var johnLennonFactsArray = []
  var i = 0
  while (i < facts.length) {
    johnLennonFactsArray.push(`${facts[i]}!!!`)
    i++
}
  return johnLennonFactsArray
}

function iLoveTheBeatles(n) {
  var iLoveTheBeatlesArray = []
  do {
    iLoveTheBeatlesArray.push("I love the Beatles!")
    n++
  } while (n < 15)
  return iLoveTheBeatlesArray
  }
