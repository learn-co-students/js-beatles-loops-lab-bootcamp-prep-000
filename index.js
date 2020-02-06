// add solution here
function theBeatlesPlay(musicians, instruments) {
  var x = [];
  var i;
  for (i = 0; i < musicians.length; i++) {
  x.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return x
}

function johnLennonFacts(array) {
  var i = 0
  var strings = []
  while (i < array.length) {
    strings.push(`${array[i]}!!!`);
    i++
  }
  return strings
}

function iLoveTheBeatles(n) {
  var arrayx = []
  do {
    arrayx.push("I love the Beatles!")
    n++
  }
  while (n < 15)
  return arrayx
}
