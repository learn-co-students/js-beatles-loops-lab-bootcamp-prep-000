function theBeatlesPlay(musicians, instruments) {
  const results = [];
  for (var i = 0; i < musicians.length; i++) {
    results.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return results
}

function johnLennonFacts(array) {
  let i = 0
  const results = []
  while(i < array.length) {
    results.push(`${array[i]}!!!`)
    i++
  }
  return results
}

function iLoveTheBeatles(num) {
  const results = []
  const message = 'I love the Beatles!'
  do {
    results.push(message)
    num++
  } while (num < 15)
  return results
}
