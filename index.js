function theBeatlesPlay(musicians, instruments) {
  let array = new Array()
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  let l = 0
  while (l < facts.length) {
    facts[l] = `${facts[l++]}!!!`
  }
  return facts
}

function iLoveTheBeatles(number) {
  let array = new Array()
  do {
    array.push("I love the Beatles!")
  } while (++number < 15)
  return array
}
