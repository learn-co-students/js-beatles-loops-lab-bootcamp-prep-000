function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  };
  return emptyArray;
};

function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = []
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
};

function iLoveTheBeatles(number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return newArray;
};
