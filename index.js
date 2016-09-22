function theBeatlesPlay(musicians, instruments) {
  const array = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return array
}

function johnLennonFacts(facts) {

  let i = 0
  while (i < facts.length) {
    facts.push(`${facts[i]}!!!`)
    i++
  }

  return facts
}
