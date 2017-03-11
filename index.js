function theBeatlesPlay(musicians, instruments) {
  var storage = [];
  for (var i=0; i<musicians.length; i++) {
    storage.push(musicians[i] + " plays " + instruments[i]);
  }
  return storage;
};

function johnLennonFacts(facts) {
  var factsWow = []
  var i = 0
  while (i < facts.length) {
    factsWow.push(facts[i] + "!!!")
    i++;
  }
  return factsWow;
};
function iLoveTheBeatles(number) {
  var before = []
  do { before.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return before;
};
