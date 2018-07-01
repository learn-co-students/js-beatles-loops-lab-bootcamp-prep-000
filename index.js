const musicians = [];

const instruments = [];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++ ) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let i = 0;
  let newFacts = [];
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!"); i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  let newArray = [];
  do {
    newArray.push("I love the Beatles!"); number++;
  } while (number < 15);
  return newArray;
}