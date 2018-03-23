function theBeatlesPlay(musicians, instruments) {
  var tmpArray = []
  for (var i = 0; i < musicians.length; i++) {
    tmpArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return tmpArray
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
  var tmpArray = []
  do {
    tmpArray.push('I love the Beatles!')
    number++
  } while (number < 15)
  return tmpArray
}
