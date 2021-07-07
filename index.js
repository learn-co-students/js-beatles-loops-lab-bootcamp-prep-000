// add solution here


function theBeatlesPlay(musicians, instruments){
  var musiciansArray = [];
  for(let i = 0; i < musicians.length; i++){
    musiciansArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return musiciansArray;
  
}
function johnLennonFacts (factsArray){
  let i = 0;
  var excitedFacts = [];
  
  while (i < factsArray.length){
    excitedFacts.push(factsArray[i] + "!!!");
    i++;
  }
  return  excitedFacts;
}

function iLoveTheBeatles(inputValue){
  var loveArray = [];
  do{
    loveArray.push("I love the Beatles!");
    inputValue++;
  } while (inputValue < 15);
  return loveArray;
}