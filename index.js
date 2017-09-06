function theBeatlesPlay(musicians, instruments) {
  var newStrings = [];
  var string = musicians[i] + " plays " + instruments[i];
  for (var i = 0; i < musicians.length; i++) {
    newStrings.push(string);
  }
  return newStrings;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newArray = [];
  while (i < facts.length) {
    var string = facts[i] + "!!!";
    newArray.push(string);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles (n) {
  var newArray = [];
  do {
    var string = "I love the Beatles!";
    newArray.push(string);
    n++;
  } while (n < 15);
  return newArray;
}
