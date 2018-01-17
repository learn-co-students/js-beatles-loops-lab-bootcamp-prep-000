function theBeatlesPlay(musicians, instruments) {
  var descriptions = new Array()
  for (var i = 0; i < musicians.length; i++) {
    descriptions.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return descriptions
}

function johnLennonFacts(facts) {
  var factsList = new Array()
  while (facts.length > 0) {
    factsList.push(facts[0] + "!!!")
    facts.shift(0)
  }
  return factsList
}

function iLoveTheBeatles(number) {
  var love = new Array()
  do {
    love.push("I love the Beatles!")
  } while (++number < 15)
  return love
}
