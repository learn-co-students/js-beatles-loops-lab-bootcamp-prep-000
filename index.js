function theBeatlesPlay(musiciansArray, instrumentsArray){
  var array = [];
  
  for (let i=0; i < musiciansArray.length; i++){
    array.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
  }
  
  return array;
}

function johnLennonFacts(anArray){
  let i = 0;
  let x = anArray.length;
  
  while(x > 0){
    anArray[i] = anArray[i] + ("!!!");
    x--;
    i++;
  }
  return anArray;
}