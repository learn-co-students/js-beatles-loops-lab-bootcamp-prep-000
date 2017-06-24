function theBeatlesPlay(musicians, instruments) {
  var strings = []
  for (let i = 0; i < musicians.length; i++) {
    strings.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return strings
}

function johnLennonFacts(facts) {
  var counter = 0
  var strings = []
  while (counter < facts.length) {
    strings.push(facts[counter] + "!!!")
    counter++
  }
  return strings
}

function iLoveTheBeatles(num) {
  var strings = []
  do {
    strings.push("I love the Beatles!")
    num++
  } while(num < 15)
  return strings
}
