function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i <4; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var LennonFacts = [];
  var i = 0;
  while(i<facts.length){
  LennonFacts.push(facts[i]+ "!!!");
  i++;
}
return LennonFacts;
}

function iLoveTheBeatles(n){
  var emptystart = [];
  do {
    emptystart.push("I love the Beatles!");
    n++;
  } while (n<15);
  return emptystart;
}