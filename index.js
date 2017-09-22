function theBeatlesPlay(array1,array2) {
  var array = []
  for (let i = 0; i < array1.length; i++) {
    array.push(array1[i] + " plays " + array2[i])
  }
  return array
}

function johnLennonFacts(array1) {
  var array = []
  var i = 0
  while(i < array1.length) {
    array.push(array1[i] + "!!!")
    i++
    }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  var i = number
  do {
    array.push("I love the Beatles!")
    i++
  } while(i < 15)
  return array
}
