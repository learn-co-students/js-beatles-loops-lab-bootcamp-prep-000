function theBeatlesPlay(musicians, instruments) {
  var array = new Array()
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  var newFacts = new Array()
  let i = 0
  while (newFacts.length < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  var array = new Array()
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15);
  return array
}
