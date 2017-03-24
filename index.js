function theBeatlesPlay(musicians, instruments) {
  var output = []
  for (let i = 0; i < musicians.length; i++) {
    output.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return output
}

function johnLennonFacts(array) {
  let i = 0
  while (i < array.length) {
    array[i++] += '!!!'
  }
  return array
}

function iLoveTheBeatles(n) {
  var output = []
  do {
    output.push("I love the Beatles!")
    n++
  } while (n < 15)
  return output
}