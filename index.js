function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while (facts.length > array.length) {
    array.push(`${facts[i++]}!!!`);
  }
    return array;
}

function iLoveTheBeatles(i) {
  var array = [];
  do {
    array.push(`I love the Beatles!`) && i++
  } while (i < 15);
  return array;
}
