function theBeatlesPlay(musicians, instruments) {
  var musicSentence = []
  for (var i = 0; i < musicians.length; i++) {
    musicSentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musicSentence
}

function johnLennonFacts(array) {
  var newArray = []
  var i = 0

  while (i < array.length) {
    newArray.push(`${array[i]}!!!`)
    i++
  }
  console.log(newArray)
  return newArray
}

function iLoveTheBeatles(number) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    number--
  } while (number >= 0 && number < 14)
  console.log(newArray)
  return newArray
}
