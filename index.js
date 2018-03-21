function theBeatlesPlay(musiciansArray,instrumentsArray){
  var whoPlaysWhat = []
  for(var i =0;i < musiciansArray.length;i++){
    whoPlaysWhat.push(musiciansArray[i] + " plays " + instrumentsArray[i])
  }
  return whoPlaysWhat
}
function johnLennonFacts(factsArray){
  var newFacts = []
  var i = 0
  while(i < factsArray.length){
    newFacts.push(factsArray[i]+"!!!")
    i++
  }
  return newFacts
}
function iLoveTheBeatles(num){
  var array = []
  do{
    array.push("I love the Beatles!")
    num++
  }while(num < 15)
  return array
}


