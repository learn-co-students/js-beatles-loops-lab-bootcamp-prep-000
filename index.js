function theBeatlesPlay(musicians, instruments) {
  var musiciansAndInstruments = [];
  for (var i = 0; i < musicians.length; i++) {
    musiciansAndInstruments.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return musiciansAndInstruments;
}

function johnLennonFacts(facts) {
  var strongFacts = [];
  var i = 0;
  while (i < facts.length) {
    strongFacts.push(facts[i] + '!!!');
    i++;
  }
  return strongFacts;
}

function iLoveTheBeatles(num) {
  var loveArray = [];
  do {
    loveArray.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return loveArray;
}