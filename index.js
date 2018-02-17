function theBeatlesPlay(musicians, instruments) {
  const arrMusIns = []
  
  for (let i = 0, length = musicians.length; i < length; i++) {
    arrMusIns.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arrMusIns
}

function johnLennonFacts(facts) {
  const newFacts = []
  
  let i = 0
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    i++
  }
  return newFacts
}

function iLoveTheBeatles(number) {
  const beatles =[]
  
  do {
    beatles.push("I love the Beatles!")
    number++
  }
  while (number < 15)
  
  return beatles
}