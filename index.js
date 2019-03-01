function theBeatlesPlay(musicians, instruments) {
  var band = [];
  for (var counter = 0; counter < musicians.length; counter++) {
    band[counter] = musicians[counter] + " plays " + instruments[counter];
  }
  return band;
}

function johnLennonFacts(facts) {
  var counter = 0;
  while (counter < facts.length) {
    facts[counter] = facts[counter] + "!!!";
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var output = [];
  var counter = 15 - num;
  do {
    output.push("I love the Beatles!");
    counter--;
  } while (counter > 0);
  return output;
}
