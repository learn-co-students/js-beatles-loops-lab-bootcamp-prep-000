// add solution here

function theBeatlesPlay(musicians, instruments) {
  var tempArray = []
  for (var i = 0; i < musicians.length; i++) {
    var tempString = `${musicians[i]} plays ${instruments[i]}`
    tempArray = [...tempArray, tempString]
  }
  return tempArray
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var tempArray = []
  do {
    tempArray = [...tempArray, 'I love the Beatles!']
    n++
  } while (n < 15)
  return tempArray
}