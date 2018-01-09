function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i<4; i++) {
    array.push (musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(factsArray) {
  var newArray = []
  var i = 0
  while (factsArray.length > i) {
    newArray[i] = factsArray[i] + '!!!'
    i++
  }
  return newArray
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push('I love the Beatles!')
    n++
  } while (n<15)
  return newArray
}
