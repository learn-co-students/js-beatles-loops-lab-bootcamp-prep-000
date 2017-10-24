function theBeatlesPlay(musicians, instruments) {
  const beatles = []
  for (let i = 0; i < 4; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0

  while (i < facts.length) {
    shoutedFacts.push(facts[i] + "!!!")
    i++
  }
  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15);
  return array
}
