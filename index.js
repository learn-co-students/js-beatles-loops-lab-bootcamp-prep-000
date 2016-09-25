function theBeatlesPlay (musicians, instruments) {
  var plays = [];
  for (var i = 0; i < musicians.length; i++) {
    plays.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return plays;
}

function johnLennonFacts (facts) {
  var exclamations = [];
  var i = 0
  while (i < facts.length) {
    exclamations.push(facts[i] + '!!!');
    i++;
  }
  return exclamations;
}

function iLoveTheBeatles (number) {
  var loves = [];
  do {
    loves.push("I love the Beatles!")
    number++;
  }
  while (number < 15)
  return loves;
}
