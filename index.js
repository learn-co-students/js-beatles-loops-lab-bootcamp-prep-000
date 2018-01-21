function theBeatlesPlay(musician, instrument) {
  var array = []
  for (var i = 0; i < 4; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var i = 0
  var newArray = []
  while (i < array.length) {
    newArray.push(`${array[i]}!!!`)
    i++
  }
  return newArray
}
  

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n = n + 1
  } while (n < 15)
  return array
}