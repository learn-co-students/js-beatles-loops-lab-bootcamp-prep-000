function theBeatlesPlay(musicians, instruments) {
  var blah = []
  for (var i = 0; i < 4; i++) {
  var z = musicians[i]
  var a = instruments[i]
  blah.push(z + ' plays ' + a)
  }
  return blah
}

function johnLennonFacts(array) {
  var x = 0
  var q = []
  while (array.length > x) {
    var p = array[x]
    q.push(p + '!!!')
    x++
  }
  return q
}

function iLoveTheBeatles(Number) {
  var y = []
  do {
    y.push("I love the Beatles!")
    Number++
  } while (Number < 15)
  return y
}