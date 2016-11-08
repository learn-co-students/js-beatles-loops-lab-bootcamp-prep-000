function theBeatlesPlay(musicians, instruments) {
  var neededArray = [];
  for (var i = 0; i < musicians.length; i++) {
    neededArray.push(musicians[i] + " plays " + instruments[i])
  }
  return neededArray
}

function johnLennonFacts(facts) {
  var counter = 0;
  var exclamationFacts = new Array();
  while (counter < facts.length) {
    exclamationFacts.push(facts[counter] + "!!!")
  counter++
  }
  return exclamationFacts
}

function iLoveTheBeatles(number) {
  var emptyArray = new Array();
  do {
    emptyArray.push("I love the Beatles!")
    number++;
  }  while (number < 15);

    return emptyArray
}
