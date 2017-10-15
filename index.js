function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlay = []
  for (var i = 0; i < musicians.length; i++) {
    theBeatlesPlay[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return theBeatlesPlay
}

function johnLennonFacts(facts) {
  var counter = 0
  while (counter < facts.length){
    facts[counter] = `${facts[counter]}!!!`
    counter++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var iLoveTheBeatles = []
  do {
    iLoveTheBeatles.push("I love the Beatles!")
    n++
  } while (n < 15)
  return iLoveTheBeatles
}
