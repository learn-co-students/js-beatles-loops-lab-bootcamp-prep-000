function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  for (let i=0; i<4; i++) {
    myArray[i] = (musicians[i] + " plays " + instruments[i])
  }
  return myArray
}

function johnLennonFacts(facts) {
  let i = 0
  while (i<facts.length) {
    facts[i] = (facts[i]+"!!!")
    i++
    }
    return facts
}
function iLoveTheBeatles(n) {
  var myArray = []
  do {
    myArray.push("I love the Beatles!")
    n++
  } while (n<15)
  return myArray
}