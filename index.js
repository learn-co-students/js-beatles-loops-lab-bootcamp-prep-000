function theBeatlesPlay (musicians, instruments) {
  var stringStorage = [];
  for (var i = 0; i < musicians.length; i++) {
    stringStorage.push(musicians[i] + " plays " + instruments[i]);
  }
  return stringStorage;
}

function johnLennonFacts(facts) {
  var excitedStrings = [];
  var i = 0;
  while (i < facts.length) {
    excitedStrings.push(facts[i] + "!!!");
    i++;
  }
  return excitedStrings;
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  var i = number;
  do {
    emptyArray.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return emptyArray;
}
