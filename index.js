function theBeatlesPlay(musicians, instruments){
  var array =[ ]
  for (var n = 0;n < 4; n++){
    array.push(`${musicians[n]} plays ${instruments[n]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var n = 0
  var newFacts = []
  while (facts.length > n){
    newFacts.push(`${facts[n]}` + "!!!")
    n++
  }
  return newFacts
}

function iLoveTheBeatles(n){
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  }
  while (`${n}` < 15)
  return array
}
