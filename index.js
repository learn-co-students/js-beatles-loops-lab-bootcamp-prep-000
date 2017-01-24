var array = []

function theBeatlesPlay(musicians, instruments) {
  for (var i=0; i<4; i++) {
    array.push(musicians[i]+" plays "+ instruments[i])
}
  return array
}

function johnLennonFacts(factsArray) {
  const punctuatedFactsArray = []
  let n=0
  while (n<factsArray.length) {
  punctuatedFactsArray.push(factsArray[n]+"!!!")
  ++n
  }
  return punctuatedFactsArray
}

function iLoveTheBeatles(n) {
  var loveBeatles = []
  do {
    loveBeatles.push("I love the Beatles!")
    n--
  } while (n<15 && n>=0)
  return loveBeatles
}
