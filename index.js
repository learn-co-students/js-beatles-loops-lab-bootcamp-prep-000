function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i<4; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts) {
  var exArray = []
  while (facts.length > 0) {
    exArray.push(`${facts[0]}!!!`)
    facts = facts.slice(1)
  }
  return exArray
}

function iLoveTheBeatles(number) {
  var loveBeatles = []
  do {
    loveBeatles.push("I love the Beatles!")
    number++
  } while (number < 15)
  return loveBeatles
}
