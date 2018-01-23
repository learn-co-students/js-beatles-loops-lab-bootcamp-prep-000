function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  } 
  return array
}

function johnLennonFacts(facts) {
  var x = 0
  var array = []
  while (x < facts.length) {
    array.push(`${facts[x]}!!!`)
    x += 1
  }
  return array
}

function iLoveTheBeatles(x) {
  var y = []
  do {
    y.push('I love the Beatles!')
    x += 1
  } while (x < 15)
  return y
}