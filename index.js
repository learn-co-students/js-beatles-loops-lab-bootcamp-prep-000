
function theBeatlesPlay(name, instrument) {
  return name.map(function(e, i) {
    return e + ' plays ' + instrument[i];
  });
}

function johnLennonFacts(facts) {
  return facts.map(f => f + "!!!");
}

function iLoveTheBeatles(n) {
  var tmp = [];
  do {
    tmp.push("I love the Beatles!");
  } while (++n < 15);

  return tmp;
}
