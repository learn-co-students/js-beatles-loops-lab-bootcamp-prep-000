function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i<musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}


function johnLennonFacts(facts) {
  for (let i = 0; i < facts.length; i++){
    facts.splice(i,1,facts[i] + "!!!")
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    n++
    array.push("I love the Beatles!")
  } while (n<15)
  return array
}
