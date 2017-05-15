function theBeatlesPlay(musicians, instruments) {
  var empty_array = [];
  for (var i=0; i < musicians.length; i++) {
    empty_array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty_array;
}

function johnLennonFacts(facts) {
  var i=0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(i) {
  var i = parseInt(i);
  var empty_array = [];
  do {
    empty_array.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return empty_array;
}