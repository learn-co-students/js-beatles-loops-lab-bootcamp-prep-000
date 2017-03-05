function theBeatlesPlay(aom, aoi) {
  var narr = []
  for (var i = 0; i < aom.length; i++) {
    narr[i] = aom[i] + " plays " + aoi[i]
  }
  return narr
}

function johnLennonFacts(array) {
  var n = 0
  while (n < array.length) {
    array[n] = array[n].concat('!!!')
    n++
  }
  return array
}

function iLoveTheBeatles(n) {
  var narr = []
  do {
    narr.push("I love the Beatles!")
    n++
  } while (n < 15)
  return narr
}