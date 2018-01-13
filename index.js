function theBeatlesPlay(musicians, instruments) {
  let array = []
  let sentence = 0
  for (let i = 0; i < musicians.length; i++) {
    array[sentence++] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i] +='!!!'
    i++
  }
  return facts
}

function iLoveTheBeatles(num) {
  let array = []
  let count = 0
  do {
    array[count++] = "I love the Beatles!"
    num++
  } while (num < 15)
  return array
}