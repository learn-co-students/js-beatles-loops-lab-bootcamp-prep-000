function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = []
  for (var i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return whoPlaysWhat
}

function johnLennonFacts(facts) {
  var exclamations = []
  for (var i = 0; i < facts.length; i++) {
    exclamations.push(`${facts[i]}!!!`)
  }
  return exclamations
}

function iLoveTheBeatles(number) {
  var empty = []
  do {
    empty.push("I love the Beatles!")
    number++
  } while (number < 15)
  return empty
}
