// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i=0; i < musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
    }
  return beatles;
}

function johnLennonFacts(facts) {
  var i = 0;
  
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var emptyArray =[];
  
  do {
  emptyArray.push("I love the Beatles!");
  n++
  } while (n < 15);
  
  return emptyArray
}