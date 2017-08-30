function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (var i = 1; i < musicians.length + 1; i++) {
    array[i-1] = musicians[i-1] + " plays " + instruments[i-1];
  }
  return array;
}

function johnLennonFacts (facts) {
  var array = [];
  var i = 0;
  while (i < facts.length) {
    array[i] = facts[i] + "!!!";
    i = i + 1;
  }
  return array;
}

function iLoveTheBeatles (number) {
  var array = [];
  var i = 0;
  do {
    array[i]  = "I love the Beatles!";
    i = i + 1;
    number = number + 1;
  } while (i < 15 && number < 15);
  return array;
}
