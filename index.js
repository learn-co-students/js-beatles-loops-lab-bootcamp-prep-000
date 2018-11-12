// add solution here
function theBeatlesPlay(musicians, instruments) {
  const facts = []

  for (let counter = 0; counter < musicians.length; counter++) {
    facts.push(`${musicians[counter]} plays ${instruments[counter]}`)
  }

  return facts
}

function johnLennonFacts(facts) {
  const exaltedFacts = []
  let counter = 0

  while (facts.length !== counter) {
    exaltedFacts.push(`${facts[counter]}!!!`)
    counter++
  }

  return exaltedFacts
}

function iLoveTheBeatles(n) {
  const array = []

  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)

  return array
}
