function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] = array[i] + "!!!"
    i++
  }
  return array
}

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array
}

function iLoveTheBeatles(numba) {
  var array = []
  var i = 0
  do {
    array.push("I love the Beatles!")
    i++
  } while (i <= numba && numba < 15)
  return array
}
