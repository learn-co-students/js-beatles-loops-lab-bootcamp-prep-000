function theBeatlesPlay(musicians, instruments) {
  var whoPlays = []
  for(var i = 0; i < musicians.length; i++) {
    whoPlays[i] = musicians[i] + " plays " + instruments[i]
  }
  return whoPlays
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length ) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var love = []
  do {
    number++
    love.push("I love the Beatles!")
  } while (number < 15)
  return love
}