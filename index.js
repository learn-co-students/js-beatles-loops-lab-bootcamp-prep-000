function theBeatlesPlay(musicians, instruments) {
  var createArray = []
  for ( var i = 0; i < musicians.length; i++) {
    createArray.push (musicians[i] + " plays " + instruments[i]);
  }
  return createArray;
}

function johnLennonFacts(facts) {
  var factsArray = []
  var i = 0
  while (facts.length > factsArray.length) {
    factsArray.push(facts[i++] + "!!!")
  }
  return factsArray;
}

function iLoveTheBeatles(number) {
  var nArray = []
  do {
    nArray.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return nArray;
}
