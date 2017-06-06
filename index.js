function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  const result = []

  while (array.length > 0) {
    const item = array.shift()
    result.push(`${item}!!!`)
  }

  return result
}

function iLoveTheBeatles(amount) {
  const array = []
  if (amount < 15) {
    do {
      array.push(`I love the Beatles!`)
      --amount
    } while (amount >= 0)
  } else {
    array.push(`I love the Beatles!`)
  }
  return array
}
