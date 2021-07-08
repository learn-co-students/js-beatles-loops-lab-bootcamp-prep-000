// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray){
  var emptyArr = [];
  for(var i = 0; i < musiciansArray.length; i++){
    emptyArr.push(musiciansArray[i] + " plays " + instrumentsArray[i])
  }
  
  return emptyArr;
}

function johnLennonFacts(factsArray){
  var i = 0;
  while(i < factsArray.length){
    factsArray[i] = factsArray[i] + "!!!"
    i++;
  }
  
  return factsArray;
}

function iLoveTheBeatles(number){
  var tempArray = [];
  
  do{
    tempArray.push("I love the Beatles!");
    number++;
  }while(number < 15);
  
  return tempArray;
  
}