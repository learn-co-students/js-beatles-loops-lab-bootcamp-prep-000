function theBeatlesPlay(musicians, instruments) {
  var empty = []

  for (var i = 0; i < musicians.length; i++) {
    empty.push(musicians[i] + " plays " + instruments[i]);
  }
  return empty
}


function johnLennonFacts(facts) {
  var newArray = []

  var i = 0
  while (i < facts.length) {
    newArray.push(facts[i] + "!!!");
    i++;
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var empty = []

  do {
    empty.push("I love the Beatles!");
    number++;
  } while (number < 15);

  return empty
}
