function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}
function johnLennonFacts(arrayFacts) {
  var i = 0
  while (i < arrayFacts.length) {
    arrayFacts[i] += '!!!'
    i++
  }
  return arrayFacts
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    n++
  } while (n<15);
  return newArray
}
