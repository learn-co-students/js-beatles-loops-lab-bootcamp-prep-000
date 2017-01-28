function theBeatlesPlay(musicianArray, instrumentArray) {
  var newArray = []
  for (var i=0;i<musicianArray.length;i++) {
    newArray.push(musicianArray[i] +" plays "+instrumentArray[i])
  }
  return newArray
}


function johnLennonFacts(factsArray) {
  var newArray = []
  var i = 0
  while (i < factsArray.length) {
    newArray[i] = factsArray[i] + "!!!"
    i += 1
  }
  return newArray
}


function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number += 1
  } while (number < 15)
  return array
}
