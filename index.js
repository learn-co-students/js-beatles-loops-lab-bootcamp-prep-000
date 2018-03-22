function theBeatlesPlay(array, instruments){
  var newArray = new Array();
  for(var i = 0; i < array.length; i++){
    newArray.push(`${array[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(array){
  let i = 0;
  while(i < array.length){
    array[i] += "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(number){
  var newArray = [];
  do{
    number += 1;
    newArray.push("I love the Beatles!");
  }
  while(number < 15)
  return newArray;
}