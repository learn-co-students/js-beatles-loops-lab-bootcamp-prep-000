
function theBeatlesPlay(arrayMusician, arrayInstruments) {
  var myArray = [];
  for(var i = 0; i < arrayMusician.length; i++) {
    myArray.push(`${arrayMusician[i]} plays ${arrayInstruments[i]}`);
  }
  return myArray;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let i = 0
  while(i < facts.length) {
  facts[i] = facts[i] + '!!!';
  i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var myArray = [];
  do {
    myArray.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return myArray;
}