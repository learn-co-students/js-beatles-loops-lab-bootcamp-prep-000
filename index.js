function theBeatlesPlay( musicians, instruments ) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

function johnLennonFacts( facts ) {
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + '!!!');
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles( number ) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return arr;
}
