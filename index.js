function theBeatlesPlay(musicians, instruments){
  var array = [];
  let i = 0;
  for (i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array;
}

function johnLennonFacts(facts){
  var array = []
  let i = 0;
  while (i < facts.length){
    array.push(facts[i] + "!!!")
    i++;
  }
  return array;
}

function iLoveTheBeatles(n){
  var array = [];
  do {
    n++;
    array.push("I love the Beatles!")
  }while(n < 15);
  return array;
}