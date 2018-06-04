function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var musicianPlaysInstrument = []
  for (var i=0; i<musiciansArray.length; i++) {
    musicianPlaysInstrument.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
  }
  return musicianPlaysInstrument
}

function johnLennonFacts(lennonFactsArray) {
  var newArray = []
  var numberOfFacts = lennonFactsArray.length
  var counter = 0
  while (counter<numberOfFacts) {
    newArray.push(`${lennonFactsArray[counter]}!!!`);
    counter++
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var array = []
  var i = 0
  do {
    array.push("I love the Beatles!")
    i++
  } while (number<15 && i<=number)
  return array
}