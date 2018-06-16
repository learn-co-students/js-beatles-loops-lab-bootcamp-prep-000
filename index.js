function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  var i = 0;
  for (i=0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(i) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return arr;
}