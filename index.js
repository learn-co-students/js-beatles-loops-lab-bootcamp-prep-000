// add solution here
function theBeatlesPlay(musicians, instruments) {
 var musicianInstruments = [];
 for (var i = 0; i < musicians.length; i++) {
   musicianInstruments.push(musicians[i] + " plays " + instruments[i]);
 }
 return musicianInstruments;
}

function johnLennonFacts(facts) {
    var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] +"!!!");
    i++;
  }
   return newFacts;
}

function iLoveTheBeatles(n) {
  var newArr = [];
  do {
    newArr.push("I love the Beatles!");
    n++;
  }
  while (n < 15)
  
  return newArr;
}

