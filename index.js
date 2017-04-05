function theBeatlesPlay(arrayM, arrayI) {
  var musiciansAndInstruments = [];
  for(var i = 0; i < arrayM.length; i++) {
    musiciansAndInstruments.push(`${arrayM[i]} plays ${arrayI[i]}`)
  }
  return musiciansAndInstruments
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
  while(i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var empty = [];
  var i = number
  do {
    empty.push("I love the Beatles!")
    i++;
  } while (i < 15);
  return empty
}
