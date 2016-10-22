function theBeatlesPlay (musicianArray, instrumentArray){
  var newArray = []
  for (let i=0; i<musicianArray.length; i++) {
    newArray.push(`${musicianArray[i]} plays ${instrumentArray[i]}`)
  }
  return newArray
}

function johnLennonFacts (factsArray){
var newArray = []
var i = 0
while (factsArray[i]) {
  newArray[i] = factsArray[i] + "!!!"
  i++
}
return newArray
}

function iLoveTheBeatles (number) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    number++
  } while (number<15);
  return newArray
}
