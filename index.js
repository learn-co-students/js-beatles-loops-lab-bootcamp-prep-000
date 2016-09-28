function theBeatlesPlay(musicians, instruments){
  var newArray = [];
    for (var i =0; i < musicians.length; i++){
      var combinedS = musicians[i] + " plays " + instruments[i];
      newArray[i] = combinedS
    }
  return newArray;
}

function johnLennonFacts(facts){
  var fact = 0
  while (fact < facts.length){
    facts[fact] = facts[fact] + "!!!";
    fact++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var newArrays = []
  do {newArrays.push("I love the Beatles!")
  number++;
} while ( number < 15);
  return newArrays;
}
