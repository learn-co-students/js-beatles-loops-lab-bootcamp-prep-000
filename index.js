function theBeatlesPlay(musicians, instruments) {
  var sentenceArray = [];
  var musIns;
  for (var i = 0; i < musicians.length; i++) {
    //stuff
    musIns = musicians[i] + " plays " + instruments[i];
    sentenceArray.push(musIns);
  }
  return sentenceArray;
}

function johnLennonFacts(facts) {
  var exclaimArray = [];
  var j = 0;
  var superFact;
  while (j < facts.length) {
    superFact = facts[j] + "!!!";
    exclaimArray.push(superFact);
    j++;
  }
  return exclaimArray;
}

function iLoveTheBeatles(number) {
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");  
    number++;
  } while (number < 15);
  return loveArray;
}
