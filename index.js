function theBeatlesPlay(musicians, instruments) {
  var my_array = []
  for (var i = 0; i < musicians.length; i++) {
    my_array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return my_array
}

function johnLennonFacts(facts) {
  var newArr = []
  var i = 0
  while (facts.length > i) {
    newArr.push(`${facts[i]}!!!`)
    i++ // i = i + 1
  }
  return newArr
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push(`I love the Beatles!`)
    n++
  } while (n < 15)
  return newArray
}
