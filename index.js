// add solution here
function theBeatlesPlay(musicians, instruments) {
  var strings = [];
  for (var i = 0; i < 4; i++) {
    strings.push(musicians[i] + " plays " + instruments[i])
  }
  return strings;
}

function johnLennonFacts(facts) {
  var factString = [];
  var index = 0;
  while (facts.length > factString.length) {
    factString.push(facts[index++] + "!!!")
  }
  return factString;
}

function iLoveTheBeatles(number) {
  var empty = []
  do {
    empty.push("I love the Beatles!");
    number++
  } while (number < 15) {
    return empty
  }
}