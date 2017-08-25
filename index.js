function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i=0; i<musicians.length; i++) {
    arr[i] = musicians[i] + " plays " + instruments[i];
  }
  return arr;
}

function johnLennonFacts(facts) {
  var arr = [];
  var i = 0;
  while (i<facts.length) {
    arr[i] = facts[i] +"!!!";
    i++;
  }
  return arr;
}

function iLoveTheBeatles(n) {
  var arr = [];
  var i = 0;
  do {
    arr[i] = "I love the Beatles!";
    i++;
  } while (i<n+1 && n<15)
  return arr;
}
