function theBeatlesPlay(musicians, instruments) {
    const array = []
    for (let i = 0, l = musicians.length; i < l; i++) {
array.push(`${musicians[i]} plays ${instruments[i]}`)

    }
    return array
}

function johnLennonFacts(facts) {
  const factsArray = []
  let i = 0
  while (i < facts.length) {
    factsArray.push(`${facts[i]}!!!`)
    i++
  }
  return factsArray
}

function iLoveTheBeatles(n) {
  const newArray = []
  do {
    newArray.push('I love the Beatles!')
    n++
  } while (n < 15)
  return newArray
}
