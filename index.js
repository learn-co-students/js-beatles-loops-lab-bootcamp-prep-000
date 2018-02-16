function theBeatlesPlay(musicians, instruments) {
  var newStrings = []
  for (var i = 0; i < musicians.length; i++) {
    newStrings[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return newStrings
}

function johnLennonFacts(array) {
  var i = 0
  var newFacts = []
  while (i < array.length) {
    newFacts[i] = `${array[i]}!!!`
    i++
  }
  return newFacts
}

function iLoveTheBeatles(num) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
  num++
  }
  while (num < 15);
  return arr
}