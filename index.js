function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i <= musicians.length - 1; i++) {
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
}

function johnLennonFacts(facts) {
  var n = facts.length
  var i = 0
  while (n > 0) {
    facts[i] = facts[i] + "!!!"
    i++
    n--
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = []
    do {
      array.push("I love the Beatles!")
      n++
    } while (n < 15)
  return array
}
