function theBeatlesPlay(musicians, instruments) {
  const array = []

  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  const exclam = []
  var i = 0
  
  while (i < array.length) {
    exclam.push(`${array[i]}!!!`)
    i++;
  }
  return exclam
}

function iLoveTheBeatles(n) {
  const array = []

  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}