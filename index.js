function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (var i = 0; i<4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts) {

  var exclamedfacts = [];
  let n = 0;
  while ( n < facts.length ) {
    exclamedfacts.push (facts[n] + "!!!");
    n++;
  }
  return exclamedfacts;
}

function iLoveTheBeatles(x) {
  var lovebeatles = [];
  do {
    lovebeatles.push("I love the Beatles!")
    x++;
  } while (x < 15);
  return lovebeatles;
}
