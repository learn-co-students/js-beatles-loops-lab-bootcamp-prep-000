function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for (var i = 0; i < 4; i++){
  emptyArray.push(musicians[i] + " " + "plays" + " " + instruments[i]);
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  var newArray = [];
  var i = 0; 
  while(i < facts.length){
  newArray.push(facts[i] + "!!!");
  i++;
  }
  return newArray;
}

function iLoveTheBeatles(number){
  var mtArray = [];
  do{
  mtArray.push("I love the Beatles!");
  number++;
  }
  while (number < 15);
  return mtArray;
}