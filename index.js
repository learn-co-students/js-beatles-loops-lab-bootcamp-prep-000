const musicians = ["John", "Paul", "George", "Ringo"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  const array = [];
  for (let i = 0; i < musicians.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      var phrase = `${musicians[i]} plays ${instruments[j]}`;
    }
    array.push(phrase);
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
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] +"!!!");
        i++;
   }
    return newFacts;
}

function iLoveTheBeatles(n) {
  let array = [];
  let count = 0;
  do {
    array.push("I love the Beatles!");
    count++
  } while (count < (n + 1) && n < 15);
  return array;
}
