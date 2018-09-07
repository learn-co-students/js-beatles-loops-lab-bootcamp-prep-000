// add solution here
function theBeatlesPlay(musicians, instruments) {
  var theBand = [];
  var i;
  for (i = 0; i < 4; i++) {
    theBand.push(musicians[i] + ' plays ' + instruments[i])
  }
  return theBand;
}

function johnLennonFacts(facts) {
  var i = 0;
  var numberOfFacts = facts.length;
  while (i < numberOfFacts) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var beatlesArray = [];
  do {
    beatlesArray.push('I love the Beatles!');
    number++;
  }
  while (number < 15);
  return beatlesArray;
}