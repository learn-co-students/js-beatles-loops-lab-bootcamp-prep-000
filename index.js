// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
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
    newFacts.push(facts[i] + "!!!")
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
  }
  while (number < 15);
}
