function theBeatlesPlay(musicians, instruments) {
  const newFacts = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    newFacts.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return newFacts
}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const somefacts = []

  do {
    somefacts.push('I love the Beatles!')
    n++
  } while (n < 15)

  return somefacts
}
