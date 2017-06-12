function theBeatlesPlay(musicians, instruments) {
  var new_strings = []
  for (var i = 0; i < musicians.length; i++) {
    new_strings.push(musicians[i] + " plays " + instruments[i]);
  }
  return new_strings;
}

function johnLennonFacts(facts) {
  var new_strings = [];
  var i = 0;
  while (i < facts.length) {
    new_strings.push(facts[i] + "!!!");
    i++;
  }
  return new_strings;
}

function iLoveTheBeatles(number) {
  var new_strings = [];
  do {
    new_strings.push("I love the Beatles!");
    number++
  } while (number < 15);
  return new_strings;
}
