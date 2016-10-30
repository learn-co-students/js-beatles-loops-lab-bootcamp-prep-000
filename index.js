function theBeatlesPlay(musicians, instruments) {
  var array = [], combo;
  for (var i = 0; i < musicians.length; i++) {
    combo = musicians[i] + " plays " + instruments[i];
    array[i] = combo;
  }
  return array;
}

function johnLennonFacts(array) {
  var new_array = [], i = 0;
  while(i < array.length) {
    new_array[i] = array[i] + "!!!";
    i++;
  }
  return new_array;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  }
  while(n < 15);
  return array;
}
