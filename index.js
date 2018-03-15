function theBeatlesPlay(musicians, instruments) {
  var gecici = []
  var i
  for (i = 0; i < musicians.length; i++) {
    gecici[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return gecici
}

function johnLennonFacts(array) {
  var i
  for (i = 0; i < array.length; i++) {
    array[i] = array[i] + "!!!"
  }
  return array
}

function iLoveTheBeatles(n) {
  var straptula = []
  do {
    straptula.push("I love the Beatles!")
    n++
  } while(n < 15)
  return straptula
}