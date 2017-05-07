function johnLennonFacts(facts) {
  let a = []
  while (a.length < facts.length) {
    a.push(facts[a.length] + '!!!')
  }
  return a
}

function iLoveTheBeatles(n) {
  let a = []
  do {
    a.push('I love the Beatles!')
    n++
  } while (n < 15)
  return a
}

function theBeatlesPlay(musicians, instruments) {
  let a = []
  for (let i = 0; i < musicians.length; i++) {
    a.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return a
}
