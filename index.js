function theBeatlesPlay(musicians, instruments){
  var emptyArray=[];
  for(var i = 0 ; i<4; i++){
    emptyArray.push(musicians[i]+ ' plays ' + instruments[i]);
  }
  return emptyArray;
}
function johnLennonFacts(factsArray){
var i = 0;
var emptyArray = [];
while(i<factsArray.length){
  emptyArray.push(factsArray[i]+'!!!');
i++;
}
return emptyArray;
}

function iLoveTheBeatles(n){
  var emptyArray = [];
  do{
    emptyArray.push("I love the Beatles!");
n++;
  }
  while(n<15);
  return emptyArray;
}
