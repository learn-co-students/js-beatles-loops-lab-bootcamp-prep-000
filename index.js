function theBeatlesPlay(musicians, instruments){
  var pairArray = []
  for (var i = 0; i < musicians.length; i++){
    var newString = `${musicians[i]} plays ${instruments[i]}`
    pairArray.push(newString)
  }
  return pairArray
}

function johnLennonFacts(facts){
  var i = 0
  while(i < facts.length){
    facts[i] += "!!!"
    i += 1
  }
  return facts
}

function iLoveTheBeatles(num){
  var newArray = []
  do{
    newArray.push("I love the Beatles!")
    num += 1
  }while(num < 15)
  return newArray
}
