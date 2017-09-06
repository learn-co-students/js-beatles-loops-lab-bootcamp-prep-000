function theBeatlesPlay(musicians, instruments) {
  var musicSentence = []
  for (i = 0; i < musicians.length; i++) {
    musicSentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musicSentence
}

var facts = ([
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"])

function johnLennonFacts(array) {
  newArray = []
  i = 0

  while (i < array.length) {
    newArray.push(`${array[i]}!!!`)
    i++
  }
  console.log(newArray)
  return newArray
}

function iLoveTheBeatles(number) {
  newArray = []
  do {
    newArray.push("I love the Beatles!")
    number--
  } while (number >= 0 && number < 14)
  console.log(newArray)
  return newArray
}

iLoveTheBeatles(15)
