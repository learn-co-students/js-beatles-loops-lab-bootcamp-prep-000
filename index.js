function theBeatlesPlay(musicians, instruments) {
  var result = []
  for (let i = 0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return result
}

function johnLennonFacts(facts) {
  var result = []
  var index = 0
  while (result.length < facts.length) {
    result.push(`${facts[index]}!!!`)
    index++
  }
  return result
}

function iLoveTheBeatles(number) {
  var result = []
  do {
    result.push("I love the Beatles!")
    number++
  } while (number < 15)
  return result
}
