function theBeatlesPlay(array1,array2) {
  var newarray = []
  for (var i=0; i<array1.length; i++){
     newarray.push(`${array1[i]} plays ${array2[i]}`)
  }
  return newarray
}

function johnLennonFacts(arrayFacts) {
  var arrayLoud = []
  var k = 0
  while (k<arrayFacts.length) {
    arrayLoud.push(`${arrayFacts[k]}!!!`)
    k++
  }
  return arrayLoud
}

function iLoveTheBeatles(n) {
var lies = []
do {
  lies.push("I love the Beatles!")
  n++
} while (n<15)
return lies
}
