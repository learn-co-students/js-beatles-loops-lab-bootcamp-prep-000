function theBeatlesPlay(musician, instrument) {
  var musiciansInstruments = [];
  for(var i = 0; i < 4; i++) {
    musiciansInstruments.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return musiciansInstruments
}

function johnLennonFacts(facts) {
  var i = facts.length - 1;
  var exclamations = "!!!"
  var factsExclamations = [];
  while(i > -1) {
    factsExclamations.unshift(facts[i] + exclamations);
    --i;
  }
  return factsExclamations
}

function iLoveTheBeatles(n) {
  var theBeatlesAreAwesome = [];
  do {
    theBeatlesAreAwesome.push("I love the Beatles!");
    ++n;
  } while (n < 15);
  return theBeatlesAreAwesome
}
