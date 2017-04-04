
function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var newArray = []

  for (var i = 0; i < arrayOfMusicians.length ; i++ ) {
    var temp_string = arrayOfMusicians[i] + " plays " + arrayOfInstruments[i]
    newArray[i] = temp_string
  }

  return newArray
}

function johnLennonFacts(arrayOfFacts) {
  var counter = 0
  var newArray = []
  while (counter < arrayOfFacts.length) {
    newArray[counter] = arrayOfFacts[counter] + "!!!"
    counter += 1
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    number += 1
  } while (number < 15)

  return newArray
}