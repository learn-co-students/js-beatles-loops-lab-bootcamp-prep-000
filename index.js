function theBeatlesPlay(musicians, instruments){
  var newString = new Array();
  for (let i = 0; i <musicians.length; i++){
   newString[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return newString;
}

function johnLennonFacts(facts){
 var i = 0;
 do{
   facts[i] = facts[i] + '!!!';
    i++;
 }
  while(i < facts.length){
    
  }
  return facts;
}

function iLoveTheBeatles(number){
  var newArray = new Array();
  do{
    newArray.push("I love the Beatles!")
    number++;
  }
  while (number <15){
    
  }
  return newArray;
}