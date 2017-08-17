function theBeatlesPlay (arrayMusicians, arrayInstrument) {
  var array = []
  for (var i = 0; i < arrayMusicians.length; i++) {
    array[i] = arrayMusicians[i] + " plays " + arrayInstrument[i]
  }
  return array
}

function johnLennonFacts(array) {
  var newArray = []
  var number = 0
  while (number < array.length) {
    newArray[number] = array[number] + "!!!"
    number++
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array[array.length] = "I love the Beatles!"
    number++
  } while (number < 15)
  return array
}
