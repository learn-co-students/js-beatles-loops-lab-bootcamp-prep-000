function theBeatlesPlay(musicians, instruments){
  newArray=[];
  for (var i = 0; i < musicians.length; i++){
    newArray.push("${musicians[i]} plays the ${instruments[1]}");
  }
  return newArray;
}
function johnLennonFacts(array){
  var i = 0;
  while (i < array.length){
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}
function iLoveTheBeatles(number){
  newArray=[];
  do{
    newArray.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return newArray;
}