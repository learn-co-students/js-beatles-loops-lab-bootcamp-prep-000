function theBeatlesPlay(musicians, instruments) {
  var sentence = [];
  for (var i = 0; i < musicians.length; i++) {
    sentence.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return sentence;
}

function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n) {
  var array = [];
  var i = 0;
  do {
    array.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return array;
}
