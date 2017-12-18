function theBeatlesPlay(musicians, instruments) {
  const musiciansPlusInstruments = [];
  for (var i = 0; i < 4; i++) {
    musiciansPlusInstruments.push(musicians[i] + " plays " + instruments[i]);
  }
  return musiciansPlusInstruments;
}

function johnLennonFacts(arrOfFacts) {
  var i = 0;
  while (i < arrOfFacts.length) {
    arrOfFacts[i] += "!!!";
    i++;
  }
  return arrOfFacts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array;
}