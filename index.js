function theBeatlesPlay (musicians, instruments) {
  var fullArray = [];
  for (var i = 0; i < 4; i++) {
    fullArray.push(musicians[i] + ' plays ' + instruments[i])
  }
  return fullArray
}

function johnLennonFacts (facts) {
  var fullFacts = [];
  var fullFactsIndex = 0;
  while (fullFactsIndex < facts.length) {
    fullFacts.push(facts[fullFactsIndex] + '!!!');
    fullFactsIndex++
  }
  return fullFacts
}

function iLoveTheBeatles (n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array
}
