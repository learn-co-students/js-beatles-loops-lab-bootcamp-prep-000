function theBeatlesPlay(beatleArray, instArray){
  var newArray = [];
for (var i = 0; i < beatleArray.length; i++){
  newArray.push(beatleArray[i] + " plays " + instArray[i]);
}
return newArray;
}

function johnLennonFacts(facts){
  var i =0;
  var newFacts = [];
  while(i < facts.length){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number){
var newArray = [];
do{
  (newArray.push("I love the Beatles!"));
  number++;
}
while (number < 15);

return newArray;
}
