
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
}
return array;
}

function johnLennonFacts(facts) {
  var snail = [];
  var i = 0;
  while(i < facts.length){
    snail.push(facts[i] + "!!!");
    i++;
  }
 return snail;
}

function iLoveTheBeatles(int) {
  var empty = [];

  do {
    empty.push(`I love the Beatles!`);
    int++;
  } while ( int < 15);

  return empty;  
}
