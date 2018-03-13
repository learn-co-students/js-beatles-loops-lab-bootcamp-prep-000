function theBeatlesPlay(musicians, instruments) {
  var beatlesInstruments = [];
  for (var i = 0; i < musicians.length; i++) {
    var tempString = `${musicians[i]} plays ${instruments[i]}`;
    beatlesInstruments.push(tempString);
  }
  return beatlesInstruments;
}

function johnLennonFacts(facts) {
 var factsWithExclamations = [];
 var i = 0;
 while (i < facts.length) {
   var tempString = `${facts[i]}!!!`;
   factsWithExclamations.push(tempString);
   i += 1;
 }
 return factsWithExclamations;
}

function iLoveTheBeatles(num) {
  var beatlesLove = [];
  
  do {
    beatlesLove.push("I love the Beatles!");
    num -= 1;
  } while (num >= 0 && num < 15);

  return beatlesLove;
}