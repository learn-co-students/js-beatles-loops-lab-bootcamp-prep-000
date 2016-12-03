function theBeatlesPlay(musicians, instruments) {
  var theBeatles = [];
  for (var i = 0; i < musicians.length; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}

function johnLennonFacts(facts) {
  var i = 0;
  var exclamatory = []
  while (i < facts.length) {
    exclamatory.push(facts[i] + "!!!");
    i++ ;
  }
  return exclamatory;
}

function iLoveTheBeatles(n) {
  var allYouNeedIsLove = [];
  do {
    allYouNeedIsLove.push('I love the Beatles')
    n--;
  }
  while (n < 15);
  return allYouNeedIsLove
}
