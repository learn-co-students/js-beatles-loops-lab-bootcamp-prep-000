function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
     arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var arr = [];
  for(var i = 0; i < facts.length; i++) {
    arr.push(facts[i] + '!!!');
  }
  return arr;
}

function iLoveTheBeatles(times) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    times--;
  } while (times < 15 && times >= 0)
  return arr;
}
