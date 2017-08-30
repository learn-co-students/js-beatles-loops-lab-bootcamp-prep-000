
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for ( var i = 0; i < instruments.length; i++) {
    array.push(`${musicians[i]}` + " plays " + `${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  for (var i = 0; i < facts.length; i++) {
    newFacts.push(`${facts[i]}`+"!!!");
  }
  return newFacts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array;
}
