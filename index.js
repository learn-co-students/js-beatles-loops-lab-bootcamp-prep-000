var i = 0;

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  var index = 0;
  while (index < facts.length) {
    array.push(facts[index] + "!!!");
    index++;
  }
  return array;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15)
  return array;
}
