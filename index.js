function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(factsp) {
  const facts = []
  let i = 0
  while (i < factsp.length) {
    facts.push(`${factsp[i]}!!!`)
    i++
  }
  return facts
}

function iLoveTheBeatles(i) {
  const array = []
  do {
    array.push('I love the Beatles!')
    i++
  } while (i < 15)
  return array
}
