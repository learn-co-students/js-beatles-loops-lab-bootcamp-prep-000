function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var returnArray = [];
  var count = 0;
  while(count < facts.length){
    returnArray.push(facts[count] + "!!!");
    count++;
  }
  return returnArray;
}
function iLoveTheBeatles(n){
  var store = [];
  do{
    store.push("I love the Beatles!");
    n++;
  }while(n < 15);
  return store;
}