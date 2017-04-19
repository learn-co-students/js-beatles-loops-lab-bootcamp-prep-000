function theBeatlesPlay(musicians, instruments) {
  var playArray = []
  for (let i=0; i < musicians.length; i++) {
    playArray.push(musicians[i] + " plays " + instruments[i])
  }
  return playArray
}

function johnLennonFacts(facts) {
  var lennonFacts = []
  var i = 0
  while (i < facts.length) {
    lennonFacts.push(facts[i] + "!!!")
    i++
  }
  return lennonFacts
}

function iLoveTheBeatles(n) {
  var beatlesArray = []
  do {
    beatlesArray.push("I love the Beatles!")
    n++
  } while (n < 15)
  return beatlesArray
}
