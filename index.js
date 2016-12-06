function theBeatlesPlay(array1, array2) {
  var result = []
  for (var n = 0; n < array1.length; n++) {
    result.push(`${array1[n]} plays ${array2[n]}`)
  }
  return result
}

function johnLennonFacts(array) {
  var result = []
  var n = 0
  while (n < array.length) {
    result.push(array[n] + "!!!")
    n++
  }
  return result
}
function iLoveTheBeatles(n) {
  var result = []
  do {
    result.push("I love the Beatles!")
    n++
  }
  while (n < 15)
  return result
}
