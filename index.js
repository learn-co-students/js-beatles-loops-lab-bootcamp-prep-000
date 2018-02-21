function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i = 0, musLen = musicians.length; i < musLen; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  const lennonFacts = []
  let i = 0
  while (i < facts.length) {
    lennonFacts.push(`${facts[i]}!!!`)
    i++
  }
  return lennonFacts
}

function iLoveTheBeatles(n) {
  const array = []
  do {array.push('I love the Beatles!'); n++}
  while (n < 15)
  return array
}
