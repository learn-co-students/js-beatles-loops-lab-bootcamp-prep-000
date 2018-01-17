

function theBeatlesPlay (musicians, instruments){
  var newList = [];
  for (var i = 0; i < musicians.length; i++){
    newList.push(musicians[i] + " plays " + instruments[i]);
  }
  return newList;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (i < facts.length){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number){
   var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    number++;
  } while (
    number < 15
    );
  return emptyArray;
}



