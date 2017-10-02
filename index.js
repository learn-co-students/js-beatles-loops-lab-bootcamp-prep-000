function theBeatlesPlay(array1, array2) {
  var newarray = []
  for(var i = 0; i < array1.length; i++) {
    newarray.push(array1[i] + " plays " + array2[i])
  }
  return newarray
}
function johnLennonFacts(arrayFacts) {
  var exclamationFacts = []
  var c = 0
  var counter = arrayFacts.length
  while(counter > 0) {
    exclamationFacts.push(arrayFacts[c] + "!!!")
    c++
    counter--
  }
  return exclamationFacts
}
function iLoveTheBeatles(number) {
  var loveBeatles = []
  do {
    loveBeatles.push("I love the Beatles!")
    number ++
  } while(number < 15)
  return loveBeatles
}
