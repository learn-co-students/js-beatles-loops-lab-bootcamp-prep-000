function theBeatlesPlay (musicians, instruments) {
  var finalArray = [];

  for (var i = 0; i < musicians.length; i++) {
    finalArray.push(musicians[i] + ' plays ' + instruments[i])
  }
  return finalArray;
}

function johnLennonFacts(facts) {
  var exclamationFacts = [];

  var i = 0;

  while (i < facts.length) {
    exclamationFacts.push(facts[i] + "!!!");
    i++;
  }
  return exclamationFacts;
}

function iLoveTheBeatles(number) {
  var loveArray = [];

  do {
    loveArray.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return loveArray;
}
