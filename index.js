function theBeatlesPlay(musicians, instruments) {
  var theBeatles = [];
  for (var i = 0; i < musicians.length; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newArray = []
  while (i < facts.length) {
    newArray.push(facts[i] + "!!!");
    i++ ;
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var array3 = [];
  do {
    array3.push('I love the Beatles!')
    n++ ;
  }
  while (n < 15);
  return array3
}
