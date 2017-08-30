function theBeatlesPlay(musicians, instruments) {
  const array = []

  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  const lennonFacts = []

  var i = 0
  while(i < facts.length) {
    lennonFacts.push(`${facts[i]}!!!`)
    i++
  }
  return lennonFacts
}

function iLoveTheBeatles(x) {
  const beatlesLove = []

  do {
    beatlesLove.push(`I love the Beatles!`)
    x++
  }
  while (x < 15)

  return beatlesLove
}
