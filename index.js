function theBeatlesPlay(musicians, instruments) {
  var strings = []
  for (let i = 0; i<musicians.length; i++) {
    strings.push(musicians[i] + " plays " + instruments[i])
  }
  return strings
}

function johnLennonFacts(facts) {
  var n = 0
  while (n<facts.length) {
    facts[n] = facts[n] + "!!!"
    ++n
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push("I love the Beatles!")
    ++num
  } while (num < 15)
  return array
}