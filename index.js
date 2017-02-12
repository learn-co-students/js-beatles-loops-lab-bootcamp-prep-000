function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i]+" plays "+instruments[i])
  }
  return arr
}
function johnLennonFacts(facts) {
  var n = 0;
  while (n < facts.length) {
    facts[n] = facts[n]+"!!!";
    n += 1;
  }
  return facts;
}
function iLoveTheBeatles(n) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    n += 1
  } while (n < 15);
  return arr
}