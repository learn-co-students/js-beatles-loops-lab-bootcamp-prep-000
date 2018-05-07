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

function iLoveTheBeatles(number){
  var anArray = [];
  do{
    anArray.push('I love the Beatles!');
    number++;
  }while(number < 15);
  
  return anArray;
}















