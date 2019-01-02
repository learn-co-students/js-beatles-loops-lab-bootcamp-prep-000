function theBeatlesPlay(musicians, instruments) {
  const arrayInstruments = [];
  for (let i = 0, l = musicians.length; i < l; i++) {
    arrayInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arrayInstruments
}

function johnLennonFacts(facts) {
  const shoutedLennonFacts = [];
  var i = 0;
  while (i < facts.length) {
    shoutedLennonFacts.push(facts[i] +"!!!");
         i++;
  }
  return shoutedLennonFacts
}

function iLoveTheBeatles(number) {
  var arrayLoveBeatles = [];
  do {arrayLoveBeatles.push("I love the Beatles!"); number++;
} while (number < 15);
  
  return arrayLoveBeatles;
}