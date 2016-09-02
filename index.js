function theBeatlesPlay(musicians, instruments) {
  var musiciansInstruments = [];
  for (var i = 0; i < musicians.length; i++) {
    musiciansInstruments.push(musicians[i] + " plays " + instruments[i]);
  }
  return musiciansInstruments;
}

function johnLennonFacts(facts) {
  var exclaimed = []
  var i = 0;
  while(i < facts.length) {
    exclaimed.push(facts[i] + "!!!");
    i++;
  }
  return exclaimed;
}

function iLoveTheBeatles(n) {
  var messages = [];
  do {
    messages.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return messages;
}
