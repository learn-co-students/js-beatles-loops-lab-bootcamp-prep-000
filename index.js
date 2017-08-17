function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  };
  return arr;
}

function johnLennonFacts(facts) {
  var new_ary = [];
  for (var i = 0; i < facts.length; i++) {
    new_ary.push(facts[i] + '!!!');
  };
  return new_ary;
}

function iLoveTheBeatles(num) {
  var new_ary = [];
  do {
    new_ary.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return new_ary;
}
