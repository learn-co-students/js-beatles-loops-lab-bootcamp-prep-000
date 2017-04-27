function theBeatlesPlay(musicians,instruments){
  var array=[];
  for(var i=0;i<musicians.length;i++){
    array.push(musicians[i]+ " plays "+ instruments[i])
  }
  return array;
}

function johnLennonFacts(facts){
var aFacts=[];
var i=0;
while(i < facts.length){
  aFacts.push(facts[i]+"!!!");
  ++i;
  }
return aFacts;
  }

function iLoveTheBeatles(num){
  var newArray=[];
  do{
    newArray.push("I love the Beatles!");
    num++;
  }
  while(num<15);

  return newArray;
}
