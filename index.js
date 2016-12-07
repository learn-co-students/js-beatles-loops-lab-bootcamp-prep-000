
function theBeatlesPlay(musiciansArray, instrumentArray){
  var sentenceArray = []
  for(let i=0; i<musiciansArray.length; i++){
    sentenceArray[i] = musiciansArray[i] + " plays " + instrumentArray[i]
  }
  return sentenceArray
}

function johnLennonFacts(factsArray){
  let i = 0
  while(factsArray[i] != undefined){
    factsArray[i] = factsArray[i] + "!!!"
    i++
  }
  return factsArray
}

function iLoveTheBeatles(n){
  var array = []
  do{
    array.push("I love the Beatles!")
    n++
  }while(n<15)

  return array
}
