function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for (var i=0;i<musicians.length;i++){
    emptyArray.push(musicians[i] + ' plays ' +instruments[i] )
  };
  return emptyArray;
}

function johnLennonFacts(facts){
  var result = [];
  var n=0;
  while (n<facts.length){
    result.push(facts[n] + "!!!")
    n++;
  };
  return result
}

function iLoveTheBeatles(number){
  var array = [];
  do {
    array.push("I love the Beatles!")
    number++;
  } while( number <15)
  return array
}
