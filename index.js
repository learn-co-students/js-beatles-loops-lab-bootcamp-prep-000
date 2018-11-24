// add solution here
function theBeatlesPlay(musicians, instruments) {
  var theBand = []
  for (let i = 0; i < musicians.length; i++) {
    theBand.push(musicians[i] + " " + "plays" + " " + instruments[i])
  }
  return theBand
}

function johnLennonFacts(facts) {
  var editedFacts = []
  var i = 0
  while (i < facts.length) {
   editedFacts.push(facts[i] + "!!!")
   i++
  }
  return (editedFacts)
}
 
function iLoveTheBeatles(n) {
  var text = []
  do {
    text.push("I love the Beatles!")
    n++
  }
  while (n < 15)
  return text
}
