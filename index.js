function theBeatlesPlay(musicians,instruments) {
  var arr = [];
  for (var i = 0 ; i < musicians.length; i++) {

    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var arr = [];
  while (facts.length > 0) {
    arr.unshift(facts.pop() + "!!!");
  }
  return arr;
}

function iLoveTheBeatles(i) {
  var arr = [];
  do {
    arr.push("I love the Beatles!")
    i++;
  } while (i < 15)
  return arr;
}
