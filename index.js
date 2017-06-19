function theBeatlesPlay(musicians, instruments) {
  var array = []

  for (var i = 0; i < 4; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0

  while (array.length != facts.length) {
    array.push(facts[i] + "!!!")
    i++
  }
  return array
}

function iLoveTheBeatles(i) {
  var array = []

  do {
    array.push("I love the Beatles!")
  } while (i != 17 && array.length != i + 1); {
    return array
  }
}
