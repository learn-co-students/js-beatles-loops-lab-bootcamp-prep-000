function theBeatlesPlay(musician, instrument){
  var array = [];
  
  for(let i = 0;i < musician.length;i++){
   array.push(musician[i] +  " plays " + instrument[i]);
  }
  return array;
}

function johnLennonFacts(arrayFacts){
  var i = 0;
  
  while(i < arrayFacts.length)  {
    arrayFacts[i] += "!!!";
    i++;
  }
  return arrayFacts;
}

function iLoveTheBeatles(number)  {
  var emptyArray = [];
  
  
  do  {
    emptyArray.unshift("I love the Beatles!");
    number++;
  }
  while (number < 15)
  return emptyArray;
}