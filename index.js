// add solution here
function theBeatlesPlay(musicians, instruments){
  let array = []
  
  for(let i = 0; i < musicians.length;i++){
    array.push(musicians[i]+" plays "+instruments[i])
  }
  return array
}

function johnLennonFacts(factsArray){
  let i = 0;
  while(i<factsArray.length){
    factsArray[i] = factsArray[i] + "!!!";
    i++
  }
  return factsArray
}

function iLoveTheBeatles(number){
  var array = []
  let i = 0
  do{
    array.push("I love the Beatles!")
    i++
  }while(number < 15 && i <= number)
  return array
}