
function theBeatlesPlay(musicians, instruments) {
  var theBeatles = []
  for (var n = 0; n < musicians.length; n++) {
    theBeatles.push(musicians[n] + ` plays ` + instruments[n])
  }
  return theBeatles
}
function johnLennonFacts(array) {
  var newarray = []
  var n = 0
  while (n < array.length) {
    newarray.push(array[n] + `!!!`)
    n++
  }
  return newarray
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push(`I love the Beatles!`)
    n++
  } while (n < 15)
  return array
}
