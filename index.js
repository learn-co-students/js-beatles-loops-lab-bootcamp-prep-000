// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arr1 = [];
  for (var i = 0; i < musicians.length; i++) {
    arr1.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr1;
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
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  let array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array;
}