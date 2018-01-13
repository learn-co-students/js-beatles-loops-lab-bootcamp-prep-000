function theBeatlesPlay(musicians, instruments) {
  var plays = []
  for (var i = 0; i < musicians.length; i++) {
    plays.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return plays
}

function johnLennonFacts(facts) {
  var len = facts.length - 1
  while (len >= 0) {
    facts[len] += '!!!'
    len--
  }
  return facts
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push('I love the Beatles!')
    number++
  } while (number < 15)
  return array
}
