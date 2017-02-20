function theBeatlesPlay(musicians, instruments) {
  var phrases = []

  for (let i = 0; i < musicians.length; i++) {
    phrases.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return phrases
}

function johnLennonFacts(facts) {
  var exclamationFacts = []

  facts.forEach(fact => {
    exclamationFacts.push(`${fact}!!!`)
  })
  return exclamationFacts
}

function iLoveTheBeatles(number) {
  const love = 'I love the Beatles!'
  let arr = []

  do {
    arr.push(love)
    number++
  } while (number < 15);

  return arr
}
