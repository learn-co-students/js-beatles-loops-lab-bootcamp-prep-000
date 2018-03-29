function theBeatlesPlay(musicians, instruments) {
  const Array = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    Array.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return Array
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
  const Array = []

  do {
    Array.push('I love the Beatles!')
    n++
  } while (n < 15)

  return Array
}