function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0;  i < musicians.length ; i++) {
    beatles.push(musicians[i] + " plays " + instruments [i]);
  }
  return beatles;
}

function johnLennonFacts(facts) {
  var exclaimFacts = [];
  var i = 0;
  while (i < facts.length) {
    exclaimFacts.push(facts[i] + "!!!");
    i++;
  }
  return exclaimFacts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do { 
    array.push("I love the Beatles!");
    n++;
  } while ( n < 15 );
  return array;
}