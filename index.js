function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  for (var i = 0; i < musicians.length; i++) {
    myArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return myArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var beatlesLove = []
  do {
    beatlesLove.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return beatlesLove;
}
