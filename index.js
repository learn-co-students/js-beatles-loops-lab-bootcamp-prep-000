function theBeatlesPlay(musicians, instruments) {
  var strArray = []

  for (var i = 0; i < musicians.length; i++) {
    strArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return strArray
}

function johnLennonFacts(array) {
  var i = 0

  while ( i < array.length) {

    array[i] = `${array[i]}!!!`

    i++
  }
  return array
}

function iLoveTheBeatles(n) {
  var arrBeatles = []

  do {

    arrBeatles.push("I love the Beatles!")
    n++
    
  } while (n < 15)

  return arrBeatles
}
