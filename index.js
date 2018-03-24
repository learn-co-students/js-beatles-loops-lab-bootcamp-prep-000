function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = new Array()
  for (var i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return whoPlaysWhat
}

function johnLennonFacts(facts) {
  var omgFacts = new Array()
  var i = 0
  while (i < facts.length) {
    omgFacts.push(`${facts[i]}!!!`)
    i++
  }
  return omgFacts
}

function iLoveTheBeatles(n) {
  var howMuch = new Array()
  do {
    howMuch.push("I love the Beatles!")
    n++
  } while (n < 15)
  return howMuch
}
