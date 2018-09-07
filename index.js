// add solution here
function theBeatlesPlay(musicians, instrument) {
  let theBandInstruments = [];
  for(let i = 0; i < musicians.length; i++) {
    theBandInstruments.push(musicians[i] + " plays " + instrument[i]);
  }
  return theBandInstruments;
}

function johnLennonFacts(facts) {
  let newFacts = [];
  let i = 0;
  while(i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  let result = [];
  do {
    result.push("I love the Beatles!");
    number++;
  } while(number < 15);
    return result;
}

