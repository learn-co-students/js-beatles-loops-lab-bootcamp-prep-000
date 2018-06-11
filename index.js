function theBeatlesPlay(musicianArray, instrumentArray){
  var beatlesArray = [];
  for (var i = 0; i < musicianArray.length; i++){
    beatlesArray.push(`${musicianArray[i]} plays ${instrumentArray[i]}`)
  }
  return beatlesArray;
}


function johnLennonFacts(factArray){
  var i = 0;
  var newArray =[];
  while (i < factArray.length){
  newArray.push(`${factArray[i]}!!!`)
 i++
  }

  return newArray;
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push('I love the Beatles!')
    number ++
  }
  while(number < 15)
   return array; 
  
}