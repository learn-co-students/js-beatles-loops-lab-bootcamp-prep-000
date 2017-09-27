function theBeatlesPlay(musicians, instruments) {
  var temp = [];
  for (var i = 0; i < musicians.length; i++) {
    temp.push(`${musicians[i]} plays ${instruments[i]}`);
  } return temp;
}

function johnLennonFacts(facts) {
  var temp = [];
  for (var i = 0; i < facts.length; i++) {
    temp.push(facts[i] + "!!!");
  } return temp;
}

function iLoveTheBeatles(num) {
  var temp = [];
  do {
    temp.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return temp;
}
