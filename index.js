function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var emptyArray = []

  for (var i = 0; i < arrayOfMusicians.length; i ++) {
    emptyArray.push(`${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`)
  }

  return emptyArray
}

function johnLennonFacts(arrayOfJohnLennonFacts) {
  var newFacts = []
  var i = 0

  while (i < arrayOfJohnLennonFacts.length) {
    newFacts.push(`${arrayOfJohnLennonFacts[i]}!!!`)
    i++
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  var storedStrings = []

  if (n >= 15) {
    return ["I love the Beatles!"]
  }

  while (n < 15) {
    storedStrings.push("I love the Beatles!")
    n += 1
  }

  return storedStrings
}
