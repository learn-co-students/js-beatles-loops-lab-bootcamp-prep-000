function theBeatlesPlay(musicians, instruments) {
  var result = []

  for(var i = 0; i < musicians.length && i < instruments.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return result
}

function johnLennonFacts(facts) {
  var result = []

  while(result.length < facts.length) {
    result.push(facts[result.length] + "!!!")
  }

  return result
}

function iLoveTheBeatles(num) {
  var result = []

  do {
    result.push("I love the Beatles!")
    num++
  } while(num < 15)

  return result
}
