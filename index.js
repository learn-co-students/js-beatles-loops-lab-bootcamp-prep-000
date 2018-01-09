function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  for (let i = 0; i < musicians.length; i++ ) {
    beatles.push(musicians[i] + " plays " + instruments[i])
  }
return beatles
}

function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++;
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
  }
  while (newArray.length <= n && n < 15)
  return newArray
}