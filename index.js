function theBeatlesPlay(musicians, instruments) {
  var stuff = []
  for (var i = 0; i < musicians.length; i++) {
    stuff.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return stuff
}

function johnLennonFacts(array) {
  var stuff = []
  for (var i = 0; i < array.length; i++) {
    stuff.push(`${array[i]}!!!`)
  }
  return stuff
}

function iLoveTheBeatles(n) {
  var stuff = []
  do {stuff.push("I love the Beatles!"); n++} while (n < 15);
  return stuff
}