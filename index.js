function theBeatlesPlay(musiciansArray, instrumentsArray){
  var array1 = []
  for (var i = 0 ; i < musiciansArray.length; i++ ) {
    array1.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
  }
  return array1
}

function johnLennonFacts(factsArray){
  var array1 = []
  while (factsArray.length > 0) {
    for (var i = 0; i < factsArray.length; i++) {
      array1.push((`${factsArray[i]}!!!`))
    }
      return array1
  }
}

function iLoveTheBeatles(number){
  var array1 = []
  do {
    array1.push("I love the Beatles!")
    number++
  } while (number < 15){

  }
  return array1
}
