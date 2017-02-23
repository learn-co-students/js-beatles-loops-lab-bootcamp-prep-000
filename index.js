function theBeatlesPlay(members, instruments) {
  var sentence = [];
  for (var i = 0; i < members.length; i++) {
    sentence.push(members[i] + " plays " + instruments[i]);
  }
  return sentence;
}

function johnLennonFacts(array) {
  var factsArray = [];
  var i = 0
  while (i < array.length) {
    factsArray.push(array[i] + "!!!")
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(i) {
  var tests = [];
  do {
    tests.push('I love the Beatles!');
    i++;
  }
  while (i < 15);
  return tests;
}
