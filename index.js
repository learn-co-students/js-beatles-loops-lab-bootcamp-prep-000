function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  for (let i = 0; i < musicians.length; i++) {
    beatles.push(musicians.slice(i,i+1) + " plays " + instruments.slice(i,i+1))
  }
  return beatles
}

function johnLennonFacts(array) {
  var exclamations = []
  var n = 0
  while (n < array.length) {
    exclamations.push(array.slice(n,n+1) + "!!!")
    n++
  }
  return exclamations
}

function iLoveTheBeatles(n) {
  var array =[]
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}
