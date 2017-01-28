function theBeatlesPlay(musicians, instruments) {
  var playArray = [];
  for (var i = 0; i < musicians.length; i++) {
    var str = `${musicians[i]} plays ${instruments[i]}`;
    playArray.push(str);
  }
  return playArray;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var n = 0;
  while (n < facts.length) {
    var str = `${facts[n]}!!!`;
    n++;
    newFacts.push(str);
  }
  return newFacts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
  array.push("I love the Beatles!");
} while ((array.length <= n) && (n !== 17));
return array;
}
