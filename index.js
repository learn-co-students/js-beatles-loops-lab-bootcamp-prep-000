function theBeatlesPlay(arrayMusician, arrayInstrument) {
  var emptyArray = []
  for (var i = 0; i < arrayMusician.length; i++) {
    emptyArray[i] = arrayMusician[i] + " plays " + arrayInstrument[i]
  }
  return emptyArray
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += "!!!"
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  var emptyArray = []
  var i = 0
  do {
    emptyArray.push('I love the Beatles!')
    number++
  } while (number < 15)
  return emptyArray
}
