function theBeatlesPlay (musicians, instruments) {
  var sentences = []

  for (let i = 0; i < musicians.length; i++) {
    sentences.push(musicians[i] + " plays " + instruments[i])
  }
  return sentences
}

function johnLennonFacts(facts) {
  const facts1 = []

  let i = 0
  while (i < facts.length) {
    facts1.push(`${facts[i]}!!!`)
    i++
  }
  return facts1
}

function iLoveTheBeatles(n) {
  const loop = []

  do {
    loop.push('I love the Beatles!')
    n++
  } while (n < 15)

  return loop
}
