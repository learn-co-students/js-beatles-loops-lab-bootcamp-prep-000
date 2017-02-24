
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i])
  }
  return arr
}

function johnLennonFacts(array) {
  var foo = []
  for (var i = 0; i < array.length; i++) {
    foo.push(array[i] + "!!!")
  }
  return foo
}

function iLoveTheBeatles(n) {
  var y = [];
  do {n++

  y.push("I love the Beatles!")
} while (n < 15)
  return y;
}
