function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var newarray = [];
  var i = 0;
  while (i <  facts.length) {
  newarray.push(facts[i] + "!!!" ); i++;
}
return newarray;
}
function iLoveTheBeatles(number) {
  var emptyArray = [];
  do { 
  emptyArray.push("I love the Beatles!");
  number++;
} while (number < 15);
return emptyArray;
}
