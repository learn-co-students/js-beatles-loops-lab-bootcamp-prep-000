function theBeatlesPlay(musicians, instruments) {
  var theBeatles = []
  for (var i = 0; i <4; i++) {
    theBeatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return theBeatles;
}
function johnLennonFacts(facts) {
  var excitedArray = [];
  var i = 0;
  while (i < facts.length) {
    excitedArray.push(facts[i] + "!!!");
    i++;
  }
  return excitedArray;
}
function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number<15);
  return array;
}