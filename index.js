// add solution here

function theBeatlesPlay(musiciansArray, instrumentsArray) {
  //console.log(musiciansArray)
  var newArray = []
  for (var i = 0; i<musiciansArray.length; i++) {
    var string = `${musiciansArray[i]} plays ${instrumentsArray[i]}`
    newArray[i] = string
  }
  return newArray 
}

function johnLennonFacts(factsArray) {
  var newArray = []
  var i = 0
  while (i < factsArray.length) {
    newArray[i] = factsArray[i] + "!!!"
    i++
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var newArray = []
  var i = number
  do {
    newArray.push('I love the Beatles!')
    i++
  } while (i < 15)
  return newArray
}



