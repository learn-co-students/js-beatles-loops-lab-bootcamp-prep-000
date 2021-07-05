// add solution here
function theBeatlesPlay(musicians, instruments) {
  var x = [];
  // assuming musicians.length === instruments.length
  for(var i=0; i<musicians.length; i++) {
    x[i] = musicians[i] + " plays " + instruments[i];
  }
  return x;
}

function johnLennonFacts(facts) {
  var i = 0;
  while(i<facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var x = [];
  do {
    x.push("I love the Beatles!");
    n++;
  } while(n<15);
  return x;
}
