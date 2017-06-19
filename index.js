function theBeatlesPlay(musicians, instruments) {
  var theBeatles = []

  for (let i = 0; i < musicians.length; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return theBeatles
}

function johnLennonFacts(facts) {
  var exclaimedFacts = []
  let i = 0

  while (i < facts.length) {
    exclaimedFacts.push(facts[i] + "!!!")
    i++
  }

  return exclaimedFacts
}

function iLoveTheBeatles(n) {
  var beatlesLovin = []

  do {
    beatlesLovin.push("I love the Beatles!")
    n++
  } while (n < 15);

  return beatlesLovin
}
