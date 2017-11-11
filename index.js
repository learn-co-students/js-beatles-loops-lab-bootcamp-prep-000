function theBeatlesPlay(musicians, instruments) {
  var newArray = [];

  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }

  return newArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];

  while (facts.length > i) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  var text = "I love the Beatles!";

  do {
    emptyArray.push(text)
    number++;
  }
  while(number < 15);

  return emptyArray;
}
