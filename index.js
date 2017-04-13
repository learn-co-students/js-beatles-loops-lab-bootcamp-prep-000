function theBeatlesPlay(musicians,instruments){
  var emptyArray = []
  for(var i = 0; i < musicians.length; i++){
    for(var j = 0; j < instruments.length; j++){
      emptyArray.push(`${musicians[j]} plays ${instruments[j]}`)
    }
    return emptyArray
  }
}

function johnLennonFacts(facts){
  var emptyArray = []
  var i = 0
  while(i < facts.length){
    emptyArray.push(`${facts[i++]}!!!`)
  }
  return emptyArray
}


function iLoveTheBeatles(number){
  var newArray = []
  do {++number
      newArray.push("I love the Beatles!")
  }
  while(number < 15)
  return newArray
}
