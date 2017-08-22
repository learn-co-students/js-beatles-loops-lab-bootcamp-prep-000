function theBeatlesPlay(musician, instrument) {
  var array = []

  for (let i = 0; i <= musician.length - 1; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }

  return array
}

function johnLennonFacts(facts) {
  var array = [], i = 0
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []

  do {
    array.push("I love the Beatles!")
    n++
  } while (n<15)
  return array
}
