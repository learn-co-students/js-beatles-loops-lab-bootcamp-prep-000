function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    theBeatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatlesPlay;
}

const facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var johnLennonFacts = [];
  let i = facts.length;
  while (i > 0) {
    --i;
    johnLennonFacts.unshift(`${facts[i]}!!!`)
  }
  return johnLennonFacts;
}

function iLoveTheBeatles(n) {
  var iLoveTheBeatles = [];
  do {
    iLoveTheBeatles.push(`I love the Beatles!`);
    n++;
  } while (n<15);
  return iLoveTheBeatles;
}
