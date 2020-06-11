function theBeatlesPlay(musicians, instruments) {
  const blank = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    blank.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return blank
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
  const blank = []

  do {
    blank.push('I love the Beatles!')
    n++
  } while (n < 15)

  return blank
}
