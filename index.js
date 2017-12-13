function theBeatlesPlay(musicians, instruments) {
  var arrayOfString = [];

  for (var i = 0; i < musicians.length; i++) {
    var sentence = `${musicians[i]} plays ${instruments[i]}`;
    arrayOfString.push(sentence);
  }
  return arrayOfString;
}

function johnLennonFacts(facts) {
  var updatedFacts = [];
  var i = 0;

  while (i < facts.length) {
    updatedFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return updatedFacts;
}

function iLoveTheBeatles(n) {
  var arrayOfStrings = [];

  do {
    arrayOfStrings.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return arrayOfStrings;
}
