function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for(var i = 0; i < musicians.length; i++){
    empty.push(`${musicians[i]}` + " plays " + `${instruments[i]}`);
  }
  return empty;
}


function johnLennonFacts(facts){
  var addArray = [];
  var n = 0;
  while(n < facts.length){
    addArray.push(`${facts[n]}` + "!!!");
    n++;
  }
  return addArray;
}


function iLoveTheBeatles(num){
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return array;
}