function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];
  for (let i = 0; i < musicians.length; i++) {
    beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesArray;
};

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let newFacts = [];
  while (facts.length > 0) {
    newFacts.push(facts.shift()+"!!!");
  }
  return newFacts;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num += 1;
  } while (num < 15);
  return array;
}
