function theBeatlesPlay(musicians, instruments) {
  var output = []

  for(let i = 0; i < musicians.length; i++) {
    output[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return output
}

function johnLennonFacts(facts) {
  for(let i = 0; i < facts.length; i++) {
    facts[i] = `${facts[i]}!!!`
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = []
  let i = 0
  do {
    array[i] = "I love the Beatles!"
    n++
    i++
  } while (n < 15)
  return array
}
