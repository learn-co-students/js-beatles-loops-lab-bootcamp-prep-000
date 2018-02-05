function theBeatlesPlay(musicians, instruments){
  var newArray = []
  for(var i = 0; i<musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts){
  var allFacts = []
  var i = 0
  while(facts.length>allFacts.length){
    allFacts.push(`${facts[i++]}!!!`)
  }
  return allFacts
}

function iLoveTheBeatles(n){
  var newArray = []
  do{ newArray.push('I love the Beatles!')
  }
  while(++n<15)
  return newArray
}
