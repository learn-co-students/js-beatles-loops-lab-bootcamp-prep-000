// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesArray.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesArray;
}

function johnLennonFacts(facts) {
  var factsArray = [];
  var limit = facts.length;
  var counter = 0
  while (counter < limit) {
    factsArray[counter] = (facts[counter] + "!!!");
    counter = counter + 1
  }
  return factsArray;
}

function iLoveTheBeatles(n) {
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    n = n + 1;
  } while (n < 15);
  return loveArray;
}