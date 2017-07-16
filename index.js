var arrayOfMusicians = []
var arrayOfInstruments = []
var initialCondition = 0
var finalCondition = 4
function theBeatlesPlay (arrayOfMusicians, arrayOfInstruments) {
  var emptyArray = []
  for (var i = initialCondition; i < finalCondition; i++) {
    emptyArray.push(arrayOfMusicians[i] + " plays " + arrayOfInstruments[i])
  }
  return emptyArray
}

var arrayOfFactsAboutJohnLennon = []
function johnLennonFacts (arrayOfFactsAboutJohnLennon) {
  var emptyArray = []
  while (arrayOfFactsAboutJohnLennon.length > 0) {
      emptyArray.push(arrayOfFactsAboutJohnLennon[0] + "!!!")
      arrayOfFactsAboutJohnLennon.shift()
  }
  return emptyArray
}

var number
function iLoveTheBeatles (number) {
    var emptyArray = []
    do {
      emptyArray.push("I love the Beatles!")
      number++
    }
    while (number < 15)
    return emptyArray
}
