function theBeatlesPlay(musicians, instruments) {
  var beatlesInfo = [];
  for (let i = 0; i < musicians.length; i++) {
    beatlesInfo.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesInfo;
}

function johnLennonFacts(facts) {
  var exclamation = [];
  let i = 0;
  while (i < facts.length) {
    exclamation.push(facts[i] + "!!!");
    i++;
  }
  return exclamation;
}

function iLoveTheBeatles(number) {
  var repetitive = [];
  do {
    repetitive.push("I love the Beatles!");
    number++;
  } while(number < 15);

  return repetitive;
}
