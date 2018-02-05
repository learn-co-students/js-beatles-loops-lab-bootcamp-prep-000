function theBeatlesPlay(musicians, instruments) {
  var musiciansInstruments = [];
  for (var i = 0; i < musicians.length; i++) {
    musiciansInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musiciansInstruments;
}

function johnLennonFacts(facts) {
  var exclamations = [];
  var i = 0;
  while (i < facts.length){
    exclamations.push(`${facts[i]}!!!`)
    i++;
  }
  return exclamations;
}

function iLoveTheBeatles(num) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    num++;
  } while (num < 15)
  return arr
}