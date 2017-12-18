function theBeatlesPlay(musicians, instruments) {
  let array = []
  for (let i = 0; i < musicians.length && instruments.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(fact) {
  let array = []
  for (let i = 0; i < fact.length; i++) {
    array.push(`${fact[i]}!!!`)
  }
  return array
}

function iLoveTheBeatles(n) {
  let array = []
  do {
    array.push("I love the Beatles!")
    n += 1
  } while (n < 15) {
  return array
  }
}
