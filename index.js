function theBeatlesPlay(musicians, instruments) {
  var newArray = []

  for ( var i = 0; i < musicians.length; i++ ) {
    var combinedString = musicians[i] + " plays " + instruments[i]
    newArray[i] = combinedString
  }
  return newArray
}

function johnLennonFacts(facts) {
  var idx = 0
  while (idx < facts.length) {
    facts[idx] = facts[idx] + "!!!"
    idx++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    n++
  } while (n < 15)
  return newArray
}
