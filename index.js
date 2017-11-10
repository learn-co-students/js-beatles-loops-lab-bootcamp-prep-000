function theBeatlesPlay(musicians, instruments){
  var newArray= [];
  for (var i = 0; i < musicians.length; i++){
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray;
}

function johnLennonFacts(facts){
  var i = 0;
  var newFacts = [];
  while (facts.length > i){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!")
    n++;
  }
  while(n < 15);
  return emptyArray;
}
