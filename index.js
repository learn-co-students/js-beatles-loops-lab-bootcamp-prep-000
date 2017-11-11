function theBeatlesPlay(musicians,instruments) {
  const theBeatles = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
    return theBeatles
}

function johnLennonFacts(facts) {
  const yelling = []

  let i = 0
  while (i < facts.length) {
    yelling.push(`${facts[i]}!!!`)
    i++
  }
  return yelling
}

function iLoveTheBeatles(n) {
  const omg =[]

  do {
    omg.push('I love the Beatles!');
    n++
  } while (n < 15);
return omg
}
