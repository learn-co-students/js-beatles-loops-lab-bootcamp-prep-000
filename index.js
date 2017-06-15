function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = []
  for (let i = 0; i < musicians.length; i++) {
    beatlesArray.push(`${musicians.slice(i, i + 1)} plays ${instruments.slice(i, i + 1)}`)
  }
  return beatlesArray
}

function johnLennonFacts(facts) {
  var excitingFacts = []
  var i = 0
  while (i < facts.length) {
    excitingFacts.push(`${facts.slice(i, i + 1)}!!!`)
    ++i
  }
  return excitingFacts
}

function iLoveTheBeatles(number) {
  var beatlesLove = []
  do {
    beatlesLove.push("I love the Beatles!")
    ++number
  } while (number < 15)
  return beatlesLove
}
