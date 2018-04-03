
function theBeatlesPlay(musicians, instruments) {
  var clauses = []
  for (var i = 0; i < musicians.length; i++) {
    clauses.push(musicians[i] + " plays " + instruments[i])
  }
  return clauses
}


function johnLennonFacts(array) {
  var superJohnFacts = []
  var i = 0
  while (i < array.length) {
    superJohnFacts.push(array[i] + "!!!")
    i++
  }
  return superJohnFacts
}

function iLoveTheBeatles(num) {
  var thisMuch = []
  do {
    thisMuch.push("I love the Beatles!")
    num++
  } while (num < 15)
  return thisMuch
}