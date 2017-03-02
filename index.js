function theBeatlesPlay(musicians, instruments){
  var band = [];
  for (var i = 0; i < musicians.length; i++){
    band[i] = musicians[i] + ' plays ' + instruments[i];
  }
  return band;
};

function johnLennonFacts(facts){
  var i = 0;
  var newFacts = [];

  while (i < facts.length){
    newFacts[i] = facts[i] + "!!!";
    i += 1;
  }
  return newFacts;
};

function iLoveTheBeatles(n){
  var array = [];
  
  do {
    array.push("I love the Beatles!");
    n += 1;
  } while (n < 15);

  return array;
};
