function theBeatlesPlay(musicians, instruments) {
  var musicInst = []

  for(let i = 0; i < musicians.length; i += 1) {
    musicInst.push(musicians[i] + " plays " + instruments[i])
  }

  return musicInst
}

function johnLennonFacts(facts) {
  var exclamation = []

  while(exclamation.length < facts.length) {
    exclamation.push(facts[exclamation.length] + "!!!")
  }

  return exclamation
}

function iLoveTheBeatles(times) {
  var count = times
  var array = []

  do {
    array.push("I love the Beatles!")
    --count
  } while (times < 15 && count > -1)

  return array
}