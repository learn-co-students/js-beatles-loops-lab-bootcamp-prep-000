// add solution here
function theBeatlesPlay(musicians, instruments){
  const musicArr = []
  
  for(var i = 0; i<musicians.length; i++){
    var arrContent = musicians[i] + " plays "+ instruments[i]
    musicArr.push(arrContent)
  }
  return musicArr
}

function johnLennonFacts(johnFacts) {
  var jFact = ""
  var factsCount = 0 
  var newFacts = []
  
  while(factsCount < johnFacts.length){
    jFact = johnFacts[factsCount] + "!!!"
    newFacts.push(jFact)
    factsCount++
    
  }
  return newFacts
}

function iLoveTheBeatles(numCount){
  var loveTheBeetles = []
  var loopCount = 0
  
  do {
    loveTheBeetles.push("I love the Beatles!")
    numCount++
  }while(numCount < 15)
  return loveTheBeetles
}



