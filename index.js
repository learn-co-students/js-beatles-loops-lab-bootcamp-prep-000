function theBeatlesPlay(musicians, instruments) {
  var lineup = []
  
  for (var i = 0; i < musicians.length; i++) {
    lineup.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  
  return lineup
}

function johnLennonFacts(facts) {
  var n = 0
  
  while (n < facts.length) {
    facts[n++] += '!!!'
  }
  
  return facts
}

function iLoveTheBeatles(times) {
  var strings = []
  
  do {
    times++
    strings.push("I love the Beatles!")
  } while (times < 15)
  
  return strings
}