function theBeatlesPlay (musicians, instruments) {
  var beatlesPlay = [];

  for (let i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    beatlesPlay[i] = `${musician} plays ${instrument}`
  }

  return beatlesPlay
}

function johnLennonFacts(facts) {
  var lennonFacts = []

  var i = 0

  while (i < facts.length) {
    var line = facts[i];
    lennonFacts[i] = `${line}!!!`;
    i++;
  }
  return lennonFacts;
}

function iLoveTheBeatles(n) {
  var array = [];
  var i = 0;

  do {
    array[i] = "I love the Beatles!";
    i++;
  } while (i <= n && n < 15);

  return array;
}
