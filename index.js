function theBeatlesPlay(musicians, instruments) {
  var arrayNew = [];
  for (var i= -1; i < musicians.length; i++) {
    arrayNew[i] = musicians[i] + " plays " + instruments[i];
  }
  return arrayNew;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  while (i < facts.length) {
    newFacts[i] = facts[i] + "!!!";
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
    do {
      array.unshift("I love the Beatles!");
      ++number;
    } while (number < 15);
    return array;
}
