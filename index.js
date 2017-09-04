function theBeatlesPlay(musicians, instruments) {
  let results = []
  for (let i = 0; i < musicians.length; i++) {
    results.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return results

}

function johnLennonFacts(array) {
  let results = []
  let i = 0
  while (i < array.length) {
    results.push(`${array[i]}!!!`)
    i++
  }
  return results
}

function iLoveTheBeatles(n) {
  let results = []
  do {
    results.push('I love the Beatles!')
    n++
  } while (n < 15)
  return results
}
