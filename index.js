function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let x = 0; x < musicians.length; x++) {
    array.push(`${musicians[x]} plays ${instruments[x]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  const arr = [];
  var n = 0;
  while (n < facts.length) {
    arr.push(`${facts[n]}!!!`);
    n++;
  }
  return arr;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return array;
}
