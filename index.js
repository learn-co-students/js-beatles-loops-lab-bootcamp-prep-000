function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [];
  for (var i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(musicians[i] + " plays " + instruments[i]);
  }

  return whoPlaysWhat;
}

function johnLennonFacts(array) {
  var facts = [];
  var i = 0;
  while (i < array.length) {
    facts.push(array[i] + "!!!");
    i++;
  }

  return facts
}

function iLoveTheBeatles(n) {
  var array = [];
  var i = n;
  do {
    array.push("I love the Beatles!");
    i++;
  } while (i < 15)
  return array
}
