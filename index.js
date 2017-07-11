function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  } return array;
}

function johnLennonFacts(facts) {
  var arr = [];
  let counter = 0;
  while(counter < facts.length){
    arr.push(facts[counter] + "!!!");
    counter++
  } return arr;
}

function iLoveTheBeatles(n) {
  var arrNew = [];
  do{
    arrNew.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return arrNew;
}
