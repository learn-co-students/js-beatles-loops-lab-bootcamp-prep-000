function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var array = []
  for (var i = 0; i < arrayOfMusicians.length; i += 1) {
    array.push(`${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`)
  }
  return array
}

function johnLennonFacts(arrayOfFactsAboutJohnLennon) {
  var arrayOfFacts = []
  var i = 0
  while (i < arrayOfFactsAboutJohnLennon.length) {
    arrayOfFacts.push(`${arrayOfFactsAboutJohnLennon[i]}!!!`)
    i += 1
  }
  return arrayOfFacts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n += 1
  } while (n < 15);
  return array
}
