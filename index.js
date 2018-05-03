function theBeatlesPlay(musicians, instruments) {
  var x = [];
  for( var i=0; i<4; i++ ) {
    x.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return x;
}

function johnLennonFacts(facts) {
  var p = []
  let i = facts.length - 1;
  while (i>=0) {
    p.unshift(`${facts[i--]}!!!`);
  }
  return p;
}

function iLoveTheBeatles(n) {
  var x = [];
  do {
    x.push("I love the Beatles!");
    ++n;
  } while (n<15)
  return x;
}

console.log(johnLennonFacts([
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ]))