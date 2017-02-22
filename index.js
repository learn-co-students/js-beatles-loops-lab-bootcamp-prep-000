function theBeatlesPlay(musicians, instruments) {
  var stringArray = [];
  stringArray.length = musicians.length;
  for (var i = 0; i < musicians.length; i++) {
    stringArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return stringArray;
}

function johnLennonFacts(facts) {
  var factArray = [];
  factArray.length = facts.length;
  var i = 0;
  while (i < facts.length) {
    factArray[i] = facts[i] + "!!!";
    i++;
  }
  return factArray;
}

function iLoveTheBeatles(number) {
  var beatlesArray = [];
  var i = 0;
  do {
    beatlesArray[i] = "I love the Beatles!";
    i++;
  } while(i <= number && number < 15)
  return beatlesArray;
}
