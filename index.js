function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for(let i=0; i<musicians.length; i++){
    newArray.push(musicians[i]+" plays "+instruments[i]);
  }
  return newArray;
}
function johnLennonFacts(facts){
  var i = 0;
  var newArray = [];
  while(i<facts.length){
    newArray.push(facts[i]+"!!!")
    i++;
  }
  return newArray;
}
function iLoveTheBeatles(number){
  var i = number;
  var array = [];
  do{
    array.push("I love the Beatles!");
    i++;
  } while(i<15);
  return array;
}
