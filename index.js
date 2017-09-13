function theBeatlesPlay(musicians, instruments) {
  const array = [];

  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}` )
  }
  return array
}

function johnLennonFacts(facts) {
  const exclaimed = [];

  let i = 0
  while (i < facts.length) {
    exclaimed.push(`${facts[i]}!!!`)
    i++
  }
  return exclaimed
}

function iLoveTheBeatles(number) {
  const beatlesArray = [];

  do {
    beatlesArray.push("I love the Beatles!")
    number++
  } while (number < 15)
  return beatlesArray
}
