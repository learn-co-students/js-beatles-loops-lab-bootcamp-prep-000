function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length && i < instruments.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
};

function johnLennonFacts(facts) {
  var excitingFacts = [];

  var i = 0;
  while (facts.length > i) {
    excitingFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return excitingFacts;
};

function iLoveTheBeatles(n) {
  var array = [];

  do
    {array.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return array;
}
