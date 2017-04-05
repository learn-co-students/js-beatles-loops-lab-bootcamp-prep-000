function theBeatlesPlay(musicians, instruments) {
  var array = []
  var i
  for( i=0; i < musicians.length; i++) {
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0
  while (i < facts.length) {
    array[i] = facts[i] + "!!!"
    i += 1
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  var i = 0
  do {
    array[i] = "I love the Beatles!";
    i += 1;
  }
  while ( i <= n && n < 15);
  return array
}