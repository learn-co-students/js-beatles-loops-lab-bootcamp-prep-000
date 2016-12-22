function theBeatlesPlay(musicians, instruments) {
  var n = []
  for (var i = 0; i < musicians.length; i++) {
    n.push(musicians[i] + " plays " + instruments[i])
  }
  return n
}

function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++
  }
  return newFacts
}

function iLoveTheBeatles(number) {
  var n = []
  do {
    n.push("I love the Beatles!")
    number++
  } while (number < 15) {
    return n
  }
}
