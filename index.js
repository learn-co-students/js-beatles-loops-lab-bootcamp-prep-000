
function theBeatlesPlay (musicians, instruments) {
  var beatlesLoops = [];
  for (var i=0; i < musicians.length; i++) {
    beatlesLoops.push(`${musicians[i]} plays ${instruments[i]}`)
  }
    return beatlesLoops
}
function johnLennonFacts (facts) {
  var factsFacts = []
  var i=0
  while (i < facts.length) {
    factsFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return factsFacts
}
function iLoveTheBeatles (number) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return emptyArray
}