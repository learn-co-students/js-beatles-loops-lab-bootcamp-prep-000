
function theBeatlesPlay(musicians, instruments) {
  var theBand = [];
  for (var i=0; i < musicians.length; i++) {
    theBand.push(musicians[i] + " plays " + instruments[i]);
  }
  return theBand;
}

function johnLennonFacts(factArray) {
  var results = [];
  var count = 0;
  while (count < factArray.length) {
    results.push(factArray[count] + "!!!");
    count++;
  }
  return results;
}

function iLoveTheBeatles(n) {
  var loveBeat = [];
  do {
    loveBeat.push("I love the Beatles!")
    n++;
  } while (n < 15);
  return loveBeat;
}
