function theBeatlesPlay(mus, art) {
  var a = []
  for (let i = 0; i < mus.length; i++) {
    a.push(`${mus[i]} plays ${art[i]}`)
  }
  return a
}

function johnLennonFacts(facts) {
  var a = []
  var i = 0
  while (a.length < facts.length) {
    a.push(`${facts[i]}!!!`)
    i++
  }
    return a
}

function iLoveTheBeatles(n) {
  var a = []
  do {
    a.push("I love the Beatles!")
    n++
  } while (n < 15)
  return a
}
