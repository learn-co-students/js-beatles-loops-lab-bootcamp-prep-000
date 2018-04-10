function theBeatlesPlay(musicians, instruments) {
    const beatles = [];
    for (let i = 0; i <= musicians.length-1; i++) {
            beatles.push(`${musicians[i]} plays ${instruments[i]}`)
        }
        return beatles
    }

function johnLennonFacts(facts) {
  const jLFacts = []
  let i = 0
  while (facts.length > i) {
    jLFacts.push(`${facts[i]}!!!`)
    i++
  }
  return jLFacts
}

function iLoveTheBeatles(n) {
  const beatlesLove = []
  do {
    beatlesLove.push(`I love the Beatles!`)
    n++
  } while (n < 15);
  return beatlesLove
}
