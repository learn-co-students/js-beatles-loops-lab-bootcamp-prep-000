function theBeatlesPlay(musicians, instruments) {
  var i = 0
  var newArray = []
  while (i < musicians.length) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
    i++
  }
  return newArray
}

function johnLennonFacts(facts) {
  var i = 0
  var newArray = []
  while (i < facts.length) {
    newArray.push(`${facts[i]}!!!`)
    i++
  }
  return newArray
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    n--
  } while (n >= 0 && n < 15)
  return newArray
}
