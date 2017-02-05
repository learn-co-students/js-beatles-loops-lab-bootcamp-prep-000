function theBeatlesPlay(musicians, instruments) {
  let array = []
  let musician = musicians.slice(0)
  let instrument = instruments.slice(0)
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musician[0]} plays ${instrument[0]}`)
    musician.shift()
    instrument.shift()
  }
  return array
}

function johnLennonFacts(facts) {
  let surprisingFacts = []
  let fact = facts.slice(0)
  while (surprisingFacts.length < facts.length) {
    surprisingFacts.push(`${fact[0]}!!!`)
    fact.shift()
  }
  return surprisingFacts
}

function iLoveTheBeatles(n) {
  let newArray = []
  do {
    newArray.push('I love the Beatles!')
    n++
  } while (n < 15)
  return newArray
}
