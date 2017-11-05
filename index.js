function theBeatlesPlay (musicians, instruments) {
  var beatlesArr = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }; return beatlesArr;
};

function johnLennonFacts (facts) {
  var factsArr = [];
  var i = 0;
  while (i < facts.length) {
    factsArr.push(`${facts[i]}!!!`);
    i++;
  }; return factsArr;
};

function iLoveTheBeatles (n) {
  var loveArr = [];
  do {
    loveArr.push(`I love the Beatles!`);
    n++;
  } while (n < 15);
  return loveArr;
};
