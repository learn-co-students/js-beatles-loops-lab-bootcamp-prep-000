function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    empty.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return empty;
}

function johnLennonFacts(facts) {
  var empty = [];
  var i = 0;
  while (empty.length != facts.length) {
    empty.push(facts[i] + '!!!');
    i++;
  }
  facts = empty;
  return facts;
}

function iLoveTheBeatles(num) {
  var empty = [];
  do {
    empty.push('I love the Beatles!');
    num++
  }
  while (num < 15) {
    return empty;
  }
}
