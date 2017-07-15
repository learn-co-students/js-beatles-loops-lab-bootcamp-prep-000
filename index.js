function theBeatlesPlay(musicians, instruments) {
  var str = [];
  for (var i = 0; i < musicians.length; i++) {
    str.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return str;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return arr;
}
