// add solution here

var theBeatlesarray = [];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
  theBeatlesarray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatlesarray;
}

function johnLennonFacts(facts) {
  var x = 0;
  while (x < facts.length) {
  facts.splice(x, 1, `${facts[x]}!!!`);
  x++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var emptyarray = [];
  do {
  emptyarray.push("I love the Beatles!");
  n++;
     } while (n < 15)
  return emptyarray
}