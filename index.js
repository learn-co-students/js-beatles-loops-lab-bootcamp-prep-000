function theBeatlesPlay(musicians, instruments) {
  var sentences = []
  for (var i = 0; i < musicians.length && i < instruments.length; i++) {
    let Name = musicians[i]
    let Tool = instruments[i]
    sentences.push(`${Name} plays ${Tool}`)
  } return sentences
}

function johnLennonFacts(array) {
  var newArray = []
  var currentFact = array.length - 1
  while (currentFact >= 0) {
    newArray.unshift(`${array[currentFact]}!!!`)
    currentFact--
  } return newArray
}

function iLoveTheBeatles(number) {
  var newArray = []

  do {
    newArray.push("I love the Beatles!")
    number++
  } while (number < 15);

  return newArray
}
