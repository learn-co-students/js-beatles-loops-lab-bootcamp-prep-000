function theBeatlesPlay(musicians, instruments) {
  let arr = []
  for(let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts) {
  let i = 0
  let newFacts = []
  while(i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    ++i
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  let empty = []
  do {
    empty.push("I love the Beatles!")
    n++
  } while (n < 15);
  return empty
}
