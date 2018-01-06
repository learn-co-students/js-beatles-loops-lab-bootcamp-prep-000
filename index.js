function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (var i = 0; i < musicians.length; i++){
    newArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return newArray;
}

function johnLennonFacts(facts){
  var newArray = [];
  var i = 0;
  while(i < facts.length){
    newArray[i] = facts[i] + "!!!";
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(loopX){
  var newArray = [];
  var i = 0;
  do{
    newArray[i] = "I love the Beatles!";
    i++;
  } while (loopX < 15 && i <= loopX);
  return newArray;
}