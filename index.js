function theBeatlesPlay(mus, instr) {
  var array = []
  for (var i = 0; i<mus.length; i++) {
    array.push(`${mus[i]} plays ${instr[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var i = 0
  var array = []
  while (i != facts.length) {
    array.push(`${facts[i]}!!!`)
    i+=1
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push('I love the Beatles!')
    n += 1
  } while (n<15)
  return array
}