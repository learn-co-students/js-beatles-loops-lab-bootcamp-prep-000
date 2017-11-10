function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i=0; i < musicians.length; i++){
      array[i] = musicians[i] + " plays " + instruments[i];
  }
  return array;
}

function johnLennonFacts(facts){
  var count = 0
  while (count < facts.length){
    facts[count] = facts[count] + "!!!";
    count++;
  }
  return facts;
}

function iLoveTheBeatles(n){
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n<15);
  return array;
}
