// add solution here
function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  
  for(let i = 0; i < musicians.length; i++){
    if(i === 0){
      emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
    } else {
      emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  }
  
  return emptyArray;
}

function johnLennonFacts(array){
  let i = 0;
  
  while(i < array.length){
    array[i] = array[i] + "!!!";
    ++i;
  }
  
  return array;
}

function iLoveTheBeatles(number){
  var emptyArray = [];
  
  do{
    emptyArray.push("I love the Beatles!");
    ++number;
  }while(number<15)
  
  return emptyArray;
}

