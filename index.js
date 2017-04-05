function theBeatlesPlay(musicians, instruments) {

  var empty = new Array()

  for (var i=0; i<musicians.length; i++ ) {

    empty.push(`${musicians[i]} plays ${instruments[i]}`)

  }

  return empty;
}

function johnLennonFacts(facts) {

  var i = 0;

  while (i<facts.length) {
  facts[i] = `${facts[i]}!!!`;
  i++;
  }

  return facts;

}

function iLoveTheBeatles(n) {

var emptyArray = new Array()

do {
  emptyArray.push("I love the Beatles!");
  n++;
}

while (n<15);

return emptyArray;
}
