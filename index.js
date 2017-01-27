function theBeatlesPlay(musicians, instruments) {
  var players = []
  for (let i = 0; i < musicians.length; i++) {
    players.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return players
}

function johnLennonFacts(facts) {
  var omgfacts = []
  var i = 0
  while (i < facts.length) {
    omgfacts.push(`${facts[i]}!!!`)
    i++
  }
  return omgfacts
}

function iLoveTheBeatles(number) {
  var lovearray = []
  do {
    lovearray.push("I love the Beatles!")
    number++
  }   while (number < 15);
  return  lovearray
  }
