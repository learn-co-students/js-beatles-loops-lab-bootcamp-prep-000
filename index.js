var theBeatlesPlay = function(musicians,instruments){
  var newArray = []
  for(var i = 0; i < musicians.length; i++){
    var statement = musicians[i]+" plays "+instruments[i];
    newArray.push(statement);
  }
  return newArray;
}

var johnLennonFacts = function(facts){
  var i = 0;
  var newArray = [];
  while(i < facts.length){
    newArray.push(facts[i] + "!!!");
    i++
  }
  return newArray;
}


var iLoveTheBeatles = function(number){
  var emptyArray = [];
  do{
    emptyArray.push("I love the Beatles!");
    number++
  }
  while (number < 15);
  return emptyArray;
}
