function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i <= musicians.length - 1; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var na = []
  var i = 0
  var length = array.length
  while (i < length) {
    na.push(`${array[i]}!!!`)
    i += 1
  }
  return na
}

function iLoveTheBeatles(n) {
  var array = []
  var i = 0
  do {
    array.push("I love the Beatles!")
    i += 1
  } while (i <= n && n < 15)
  return array
}
