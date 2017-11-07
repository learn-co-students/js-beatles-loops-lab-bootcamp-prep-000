function theBeatlesPlay(musicians, instruments) {
  var list = [];
  for (var i = 0; i < musicians.length; i++) {
      list.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return list;
}
function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.length) {
    facts[i] += "!!!";
    i++
  }
  return facts;
}
function iLoveTheBeatles(n) {
  var list = [];
  do {
    list.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return list;
}
