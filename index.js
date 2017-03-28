function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var n = 0; n < musicians.length; ++n) {
    array[n] = `${musicians[n]} plays ${instruments[n]}`
  }
  return array
}

function johnLennonFacts(facts) {
  var excitedFacts = [];
  var n = facts.length - 1;
  while (n >= 0) {
    excitedFacts[n] = `${facts[n]}!!!`;
    --n;
  }
  return excitedFacts
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push(`I love the Beatles!`);
    ++number;
  } while (number < 15);
  return array
}
