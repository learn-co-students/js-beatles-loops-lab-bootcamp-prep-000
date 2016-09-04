function theBeatlesPlay(musician, instrument) {
  var empty = [];
  for (var i = 0; i < musician.length; i++) {
    empty.push(musician[i] + " plays " + instrument[i]);
  }
  return empty;
};

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
};


function iLoveTheBeatles(number) {
  var empty = [];
  do {
    empty.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return empty;
};
