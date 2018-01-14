function theBeatlesPlay(musicians, instruments){
  var resultingStrings = []
  for (var i=0;musicians.length>i;i++){
    resultingStrings.push(musicians[i]+ " plays "+instruments[i])
  }
  return resultingStrings
}

function johnLennonFacts(facts){
  var factsAboutLennon = []
  var i = 0
  while (facts.length>i) {
    factsAboutLennon.push(facts[i]+"!!!")
    i++
  }
  return factsAboutLennon
}

function iLoveTheBeatles(n){
  var newArray = []
  do {newArray.push("I love the Beatles!")
    n++
  }
  while (n<15)
  return newArray
}