
function theBeatlesPlay (musicians, instruments) {
  var beatles = []

  for(var i = 0, l = musicians.length; i < l; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i])
  }

  return beatles
}

function johnLennonFacts (facts) {
  const newFacts = []

  let i = 0
  while (i < facts.length ) {
  newFacts.push(facts[i] + "!!!")
  i++
  }
  return newFacts
}

function iLoveTheBeatles (n) {
  var array = []

  do {
    array.push("I love the Beatles!")
    n++
  }
  while(n<15)

  return array
}
