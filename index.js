function theBeatlesPlay (musicians, instruments) {
  var blankArray = []
  for (let i = 0; i < musicians.length; i++) {
    blankArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return blankArray;
}

function johnLennonFacts (facts) {
  var loudFacts = [];
  let i = 0;
  while (i < facts.length) {
    loudFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return loudFacts;
}

function iLoveTheBeatles(n) {
  var loveArray = [];
  do {
    loveArray.push(`I love the Beatles!`);
    n++;
  } while (n < 15);
  return loveArray;
}
