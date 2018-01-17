function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlayWhichInstruments = [];
  for (let i = 0; i < 4; i++) {
    theBeatlesPlayWhichInstruments.push( musicians[i] + " plays " + instruments[i] );
  }
  return theBeatlesPlayWhichInstruments;
}

function johnLennonFacts(facts) {
  var johnLennonFactsExclamations = [];
  let i = 0;
  while (i < facts.length) {
    johnLennonFactsExclamations.push( facts[i] + "!!!");
    console.log(i++);
    }
  return johnLennonFactsExclamations;
}

function iLoveTheBeatles(n) {
  var loveBeatles = [];
  do {
    loveBeatles.push( "I love the Beatles!" );
    console.log(n++);
  } while (n < 15);
  return loveBeatles;
}

