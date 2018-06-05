function theBeatlesPlay(musicians, instruments) {
  var strings = [];
  for (var i = 0; i < musicians.length; i++) {
    strings.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return strings;
}

function johnLennonFacts(facts) {
  var strings = [];
  var i = 0;
  while (i < facts.length) {
    strings.push(`${facts[i]}!!!`);
    i++;
  }
  return strings;
}

function iLoveTheBeatles(n) {
  var strings = [];
  do {
    strings.push("I love the Beatles!");
    n++;
  } while (n < 15);
  
  return strings;
}