function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i])
  }
  return beatles
}

function johnLennonFacts(facts) {
  var i = 0
  var temp = []
  while (i < facts.length ) {
    temp.push(`${facts[i]}`  + '!!!')
    i++
  }
    return temp
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    n++
    newArray.push("I love the Beatles!")
  } while (n < 15)
  return newArray
}