function theBeatlesPlay(musicians, instruments) {
  let results = [];
  for (var i = 0; i < musicians.length; i++) {
    results.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return results
}

function johnLennonFacts(array) {
  let i = 0
  let results = []
  while(i < array.length) {
    results.push(`${array[i]}!!!`)
    i++
  }
  return results
}

function iLoveTheBeatles(num) {
  let results = []
  const message = 'I love the Beatles!'
  do {
    results.push(message)
    num++
  } while (num < 15)
  return results
}
