function theBeatlesPlay(musicians, instruments){
  var musiciansAndInstruments = [];
  
  for (let i = 0; i < musicians.length; i++) {
    musiciansAndInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musiciansAndInstruments;
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var emptyArray = [];
  do {
    emptyArray.unshift(`I love the Beatles!`);
    number++;
  } while (number < 15);
  return emptyArray;
}