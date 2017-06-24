function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i])
  }
  return beatles
}

function johnLennonFacts(facts) {
  var count = 0
  var newFacts = []
  while(count < facts.length) {
    newFacts.push(facts[count] + "!!!")
    count += 1
  }
  return newFacts
}

function iLoveTheBeatles(num) {
  var beatles = []
  do {
    beatles.push("I love the Beatles!")
    num += 1
  } while(num < 15)
  return beatles
}
