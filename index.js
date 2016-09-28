function theBeatlesPlay(arrM, arrI){
  var empty = [];
  var i;
  for (i = 0; i < arrM.length; i++){
    empty.push(arrM[i] + " plays " + arrI[i])
  }
  return empty
}

function johnLennonFacts(facts){

var newFacts =[];
var i = 0;

while(i < facts.length){

newFacts.push(facts[i] + "!!!")
  i++;
}
return newFacts
}

function iLoveTheBeatles(n){
  var empty = [];
  do {
    empty.push("I love the Beatles!")
    n++;
  }while(n < 15);
    return empty
  }
