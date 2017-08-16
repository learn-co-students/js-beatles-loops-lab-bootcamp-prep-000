function theBeatlesPlay(musicians, instruments) {
  var mix = []
  for (var i = 0; i < musicians.length; i++) {
    mix[i] = musicians[i] + " plays " + instruments[i]
  }
  return mix
}

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + "!!!"
  }
  return facts
}

function iLoveTheBeatles(number) {
  var love = []
  do {
    love.push("I love the Beatles!")
    number++
  } while (number < 15);
  return love
}
