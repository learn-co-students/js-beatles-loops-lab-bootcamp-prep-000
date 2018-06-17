function theBeatlesPlay(musicians, instruments) {
  var arr = []

  for (var i = 0, l = musicians.length; i < l; i++) {
    arr.push(musicians[i] + " plays " + instruments[i])
  }

  return arr
}


function johnLennonFacts(facts) {
  var theFacts = []

  var i = 0
  while (i < facts.length) {
    theFacts.push(facts[i] + "!!!")
    i++
  }
  return theFacts
}

function iLoveTheBeatles(n) {
  var arrs = []
  do {
    arrs.push('I love the Beatles!')
    n++
  } while (n < 15)
  return arrs
}
