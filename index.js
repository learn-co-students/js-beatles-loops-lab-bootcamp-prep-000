function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  };
  return array;
};

function johnLennonFacts(johnLennonFacts) {
  var array = [];
  let n = 0;
  while (n < johnLennonFacts.length) {
    array.push(johnLennonFacts[n] + "!!!");
    n++;
  };
  return array
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array;
};
