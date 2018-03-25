function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (let i = 0; i < 4; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
return empty;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = `${facts[i]}` + "!!!";
    i++;
 }
  return facts;
}

function iLoveTheBeatles(n) {
  var empty = [];
  do {
    empty.unshift("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return empty;
}
