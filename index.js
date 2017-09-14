function theBeatlesPlay(musicians, instruments) {
  var sandy = []
  for (var i = 0; i < musicians.length; i++) {
    sandy.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sandy
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var x = []
  do {
    x.push("I love the Beatles!")
    number++
  } while (number < 15)
  return x
}
