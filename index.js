function theBeatlesPlay(musicians, instruments) {

  const newArray = []

    for (let i = 0; i < musicians.length; i++) {
      newArray.push(`${musicians[i]} plays ${instruments[i]}`)
    }

  return newArray
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
  const beatlesLove = []

  do {
    beatlesLove.push('I love the Beatles!')
    n++
  } while (n < 15)
  return beatlesLove
}
