// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatles=[];
  for(var i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}
function johnLennonFacts(array) {
  var newFacts=[];
  var i=0;
  while(i<array.length) {
    newFacts.push(array[i] + "!!!");
    i++;
  }
  return newFacts;
}
function iLoveTheBeatles(n) {
  var beatles=[];
  do {
    beatles.push(`I love the Beatles!`);
    n++;
  } while(n<15);
  return beatles;
}