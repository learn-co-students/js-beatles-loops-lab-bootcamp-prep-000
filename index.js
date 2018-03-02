function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];
  for ( var i = musicians.length - 1; i >= 0; i--) {
    beatlesArray = [`${musicians[i]} plays ${instruments[i]}`, ...beatlesArray];
  }
  return beatlesArray;
}

function johnLennonFacts(facts) {
  var n = facts.length - 1;
  while (n >= 0) {
    facts[n] = `${facts[n]}!!!`;
    n -= 1
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var loveArray = [];
  do {
    loveArray.push('I love the Beatles!');
    n += 1;
  } while (n < 15);
  return loveArray;
}