function theBeatlesPlay (musiciansArray, instrumentsArray) {
  var newArray = []
  for (var i=0; i < 4; i++) {
    newArray[i] = musiciansArray[i] + " plays " + instrumentsArray[i]
  }
  return newArray
}
function johnLennonFacts(arrayFacts) {
  var counter = 0
  while (counter < arrayFacts.length) {
    arrayFacts[counter] = arrayFacts[counter] +"!!!"
    counter ++
  }
  return arrayFacts
}
function iLoveTheBeatles (number) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    number ++
  }
  while (number < 15)
  return newArray
}
