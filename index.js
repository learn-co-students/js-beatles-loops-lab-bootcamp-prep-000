function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  var i = 0;
  var newFacts = facts;
  while (i < facts.length) {
    newFacts[i] = facts[i] + "!!!";
    ++i;
  }
  return newFacts;
}

function iLoveTheBeatles(a){
  var emptyArray = [];
  var i = 0;
  do{
    emptyArray[i] = "I love the Beatles!";
    ++i;
    ++a;
  }while (a < 15);
  return  emptyArray;
}