function theBeatlesPlay(musicians, instruments){
  var newArray = []
  for(var i = 0; i<musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts){
  var shoutedFacts = []
  var i = 0
  while(i<facts.length){
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }
  return shoutedFacts
}

function iLoveTheBeatles(n){
  var newArray = []
  do{newArray.push('I love the Beatles!')
  n++
  }
  while(n<15)
  return newArray
}
