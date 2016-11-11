function theBeatlesPlay(musicians, instruments) {
  const emptyArray = []
  for (let i = 0, l = musicians.length;  i < l; i++ ) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  const newFacts = []

  let n = 0
  while (n < facts.length) {
    newFacts.push(`${facts[n]}!!!`)
    n++
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  const newArray = []

  do {
    newArray.push('I love the Beatles!')
    n++
  } while ( n < 15 )

  return newArray
}
