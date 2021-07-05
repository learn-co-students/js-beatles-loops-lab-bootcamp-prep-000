
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var counter = 0; counter < musicians.length; counter++){
    array.push(musicians[counter] + " plays " + instruments[counter]);
  }
  return array;
}

function johnLennonFacts(facts){
  var excitedFacts = [];
  var i = 0;
  while(i < facts.length){
    excitedFacts.push(facts[i] + "!!!");
    i++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(n){
  var array = [];
  do{
    array.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return array;
}
