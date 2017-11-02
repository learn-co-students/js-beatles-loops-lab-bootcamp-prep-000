function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < (musicians.length); i++) {
      array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}
function johnLennonFacts(facts) {
  var array = [];
  for (let i = 0; i < (facts.length); i++) {
    array.push(facts[i] + "!!!");
  }
  return array;
}
function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++
  } while (n < 15);
  return array;
}
