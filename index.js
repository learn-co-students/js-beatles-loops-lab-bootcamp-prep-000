function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (let i = 0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
};

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let i = facts.length
  while (i > 0) {
    facts[i-1] = facts[i-1]+"!!!";
    i--;
  }
  return facts;
};

function iLoveTheBeatles(n) {
  var result = [];
  do {
    result.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return result;
};
