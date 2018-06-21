function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < 4; i++) {
    array.push(`${musicians[0]} plays ${instruments[0]}`)
    musicians.shift()
    instruments.shift()
  }
  return array
}

function johnLennonFacts(facts) {
 var excitedFacts = []
 var factsIndex = 0
 while (excitedFacts.length < facts.length) {
   excitedFacts.push(`${facts[factsIndex]}!!!`)
   factsIndex += 1
 } 
 return excitedFacts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n += 1
  } while (n < 15)
  return array
}
