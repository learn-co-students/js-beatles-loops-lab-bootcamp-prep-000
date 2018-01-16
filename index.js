function theBeatlesPlay(musicians,instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`
    newArray.push(string)
  }
  return newArray
}

function johnLennonFacts(arrayOfFacts) {
  var numberOfFacts = arrayOfFacts.length
  while (numberOfFacts > 0) {
    arrayOfFacts[numberOfFacts - 1] = arrayOfFacts[numberOfFacts - 1] + "!!!"
    numberOfFacts--
  }
  return arrayOfFacts
}

function iLoveTheBeatles(num) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    num++
  } while (num < 15)
  return newArray
}