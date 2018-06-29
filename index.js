function theBeatlesPlay(musicians, instrument) {
 var theBeatles = [];
 for ( var i = 0; i < musicians.length; i++  ) {
   theBeatles.push(musicians[i]  + ' plays ' + instrument[i]);
 }
 return theBeatles;
}
function johnLennonFacts (facts) {
  var i = 0;
  var newFacts = [];
  while( i < facts.length) { 
    newFacts.push(facts[i] + '!!!');
    i++;
  }
  return newFacts;
}
function iLoveTheBeatles(n) {
  var array = [];
  do { array.push('I love the Beatles!');
  n++
 } while ( n < 15)
  return array
}
