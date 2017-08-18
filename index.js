function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var emptyArray = new Array();
  for (var i = 0; i < arrayMusicians.length; i++) {
    emptyArray.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`)
  }
  return emptyArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var factsWithExclamations = new Array();
  let i = 0;
  while (facts.length > factsWithExclamations.length) {

    factsWithExclamations.push(`${facts[i]}!!!`)
    i++;
  }
  return factsWithExclamations;
}

function iLoveTheBeatles(n) {
  var array = new Array();
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15);
  return array;
}
