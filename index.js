function theBeatlesPlay(musicians, instruments) {
  var temp = [];
  for(var i = 0; i < musicians.length; i++) {
    temp[i] = musicians[i] + " plays " + instruments[i];
  }
  return temp;
}

function johnLennonFacts(facts) {
  for(var i = 0; i < facts.length; i++) {
    facts[i] += '!!!';
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var temp = [];
  var i = 0;
  do {
    temp[i] = "I love the Beatles!";
    i++;
    num++;
  } while(num < 15);

  return temp;
}
