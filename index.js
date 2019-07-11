function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    array[i] = musicians[i] + " plays "+ instruments[i];
  }
  return array
}

function johnLennonFacts(facts){
  for (var i = 0; i < facts.length; i++){
    facts[i] = facts[i] + "!!!";
  }
  return facts
}

function iLoveTheBeatles(n){
  var array = [];
  do {
    array.push("I love the Beatles!");
    n += 1
  } while (n < 15);
  return array
}