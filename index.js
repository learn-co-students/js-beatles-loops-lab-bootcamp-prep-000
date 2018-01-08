function theBeatlesPlay(musicians, instruments) {
  var beatlesInstruments = [];
  for (let i = 0; i < musicians.length; i++) {
    beatlesInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesInstruments
}

function johnLennonFacts(facts) {
  var lennonFacts = [];
  let i = 0;
  while (i < facts.length) {
    lennonFacts.push(facts[i] + "!!!");
    i += 1;
  }
  return lennonFacts
}

function iLoveTheBeatles(number) {
  var beatlesLove = [];
  do {beatlesLove.push("I love the Beatles!");
  number += 1;
  } while(number < 15);
  return beatlesLove
}