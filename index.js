function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++){
    emptyArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
    return emptyArray;
}

function johnLennonFacts(facts) {
  var i = 0 ;
  while (i < facts.length) {
    facts[i] +=  '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var empty = [];
  do {
    empty.push('I love the Beatles!');
    n++;
  }
  while (n < 15);
  return empty;
}