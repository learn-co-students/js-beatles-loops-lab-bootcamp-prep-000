function theBeatlesPlay(musicians, instruments) {
  let empty = [];
  for(var i = 0; i < musicians.length; i++) {
    empty.push(musicians[i] + " plays " + instruments[i]);
  }
  return empty;
}

function johnLennonFacts(facts) {
  let empty = [];
  let i = 0;
  while (empty.length < facts.length) {
    empty.push(facts[i] + "!!!");
    i++;
  }
  return empty;
}

function iLoveTheBeatles(n) {
  let empty = [];
  do {
    empty.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return empty;
}
