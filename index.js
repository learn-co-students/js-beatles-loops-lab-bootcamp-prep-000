// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    n++;
    array.push('I love the Beatles!');
  }
  while (n < 15);
  return array
}
