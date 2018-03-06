function theBeatlesPlay(musicians, instruments){
  var array = [];
  var arrayLength = musicians.length;
  for(var i=0;  i < arrayLength; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}



function johnLennonFacts(array){
  var tempNum = 0;
  var arr=[];
  while(tempNum < array.length){
    
    arr.push(array[tempNum]+"!!!");
    tempNum += 1;
  }
  return arr;
}



function iLoveTheBeatles(n){
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n = n+1;
  } while (n<15);
return arr;
}