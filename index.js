function theBeatlesPlay(musicians, instruments) {
  var test = [];
  for (var i = 0; i < 4; i++) {
    test[i] = musicians[i] + " plays " + instruments[i];
  }
  return test
}

function johnLennonFacts(facts) {
  var test = []
  var i = 0
  while (i < facts.length) {
    test[i] = facts[i] + "!!!"
    i++
  }
  return test
}

function iLoveTheBeatles(number) {
  var test = []
  do {
    test.push("I love the Beatles!")
    number++
  } while (number < 15)
  return test
}
