function theBeatlesPlay(musician, instrument) {
  var arr = [];

  for (var i = 0; i < musician.length; i++) {
    arr.push(`${ musician[i] } plays ${ instrument[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var countdown = 0;
  while(countdown < facts.length) {
    facts[countdown] = `${ facts[countdown] }!!!`;
    countdown++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var arr = [];

  do {
    arr.push("I love the Beatles!");
    number += 1;
  } while (number < 15);
  return arr;
}
