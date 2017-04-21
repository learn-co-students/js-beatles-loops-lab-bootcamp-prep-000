function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    var phrase = `${musicians[i]} plays ${instruments[i]}`
    newArray.push(phrase)
  }
  return newArray
}

function johnLennonFacts(facts) {
  var excitedArray = []
  var i = 0
  while (i < facts.length) {
    excitedArray.push(facts[i] + '!!!')
    i++
  }
  return excitedArray
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    n++
  } while (n < 15)
  return newArray
}
