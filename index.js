function theBeatlesPlay(musicians, instruments) {
  var play = []
  var i = 0
  for (i = 0; i < musicians.length; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return play
}

function johnLennonFacts(facts) {
  var moreFacts = []
  var i = 0
  while (i < facts.length) {
    moreFacts.push(`${facts[i]}!!!`)
    i++
  }
  return moreFacts
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push('I love the Beatles!')
    n++
  } while(n < 15)
  return newArray
}
