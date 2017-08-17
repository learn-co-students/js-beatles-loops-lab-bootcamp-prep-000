

function theBeatlesPlay(musicians, instruments) {
  var array1 = []
  for (var i = 0; i < musicians.length; i++) {
    array1.push( `${musicians[i]} plays ${instruments[i]}`)

  }
  return array1
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts
}

function iLoveTheBeatles(number) {
  var array = [];
  var n = number;
  do {
    array.push("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return array
}
