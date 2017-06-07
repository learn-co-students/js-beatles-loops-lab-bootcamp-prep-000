function theBeatlesPlay(arrM, arrI) {
  var array =[]
  for (var i = 0; i < arrM.length; i++) {
    array.push(`${arrM[i]} plays ${arrI[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var n = 0
  while(n < array.length) {
    array[n] += '!!!'
    n++
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  }
  while (n < 15 )
  return array
}
