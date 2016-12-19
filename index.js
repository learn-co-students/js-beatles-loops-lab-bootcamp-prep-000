
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var newFacts =[];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}
function iLoveTheBeatles(number) {
  var array = [];
  var i = 0;
if (number < 15) {
  do {
    array.push("I love the Beatles!");
    i++;
  }
  while (i <= number);
}
else {
  array.push("I love the Beatles!");
}
return array;
}
