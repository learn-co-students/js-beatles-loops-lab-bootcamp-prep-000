function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i=0; i < instruments.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  let x = 0;
  while (x < facts.length) {
    facts[x] = facts[x] + "!!!";
    x++;
  }
  return facts;
}

function iLoveTheBeatles(x) {
  let array = [];
  do {
    array.push("I love the Beatles!");
    x++;
  } while (x < 15)
  return array;
}
