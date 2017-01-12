function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var i in musicians){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
return array
}



function johnLennonFacts(facts){
  var factsAdded =[];
  var i = 0;
  while (i < facts.length){
    factsAdded.push(facts[i] + "!!!");
    i ++;
  }
  return factsAdded
}

function iLoveTheBeatles(number){
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    number ++;
  }
  while (number < 15);
  return emptyArray 
}
