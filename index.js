function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i = 0; i < musicians.length; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  const shoutedFacts = []
  var i = 0
  while (i < array.length) {
    shoutedFacts.push(`${array[i]}!!!`)
    i++
  }
  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const array = []
  do {
    array.push('I love the Beatles!')
    n++
  } while (n< 15)
  return array
}
