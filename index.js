function theBeatlesPlay(musicians, instruments) {
  var lul = []
  for (var i = 0; i < musicians.length; i++) {
    lul.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return lul;
}
function johnLennonFacts(facts) {
  var facts2 = [];
  var i = 0;
  while (i < facts.length){facts2.push(`${facts[i]}!!!`);
    i++;
  }
  return facts2;
}
function iLoveTheBeatles(n) {
  var emptyarray = [];
  do {emptyarray.push("I love the Beatles!");
   n++;
  } while (n<15);
  return emptyarray;
}
