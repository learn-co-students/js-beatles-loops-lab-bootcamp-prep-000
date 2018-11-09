// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array1 = []
  for (var i = 0; i<4; i++) {
    array1.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array1;
}

function johnLennonFacts(facts) {
  var i = facts.length;
  while (i > 0) {
    i=i-1;
    facts[i] = facts[i] + "!!!";
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array2=[];
  do {
    array2.push('I love the Beatles!');
    n=n+1;
  }
  while (n<15);
  return array2
}
