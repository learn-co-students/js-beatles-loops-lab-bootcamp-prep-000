function theBeatlesPlay(beatles, instruments) {
  var output = [];

  for (var i = 0; i < beatles.length; i++) {
    output.push(`${beatles[i]} plays ${instruments[i]}`);
  }

  return output;
}

function johnLennonFacts(factsArray) {
  var i = 0;
  while (i < factsArray.length) {
    factsArray[i] = factsArray[i] + '!!!';
    i++;
  }

  return factsArray;
}

function iLoveTheBeatles(n) {
  var chantArray = [];
  do {
    chantArray.push("I love the Beatles!");
    n++;
  } while (n < 15);

  return chantArray;
}
