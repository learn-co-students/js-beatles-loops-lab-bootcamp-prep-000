var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var storage = [];
  for (var i = 0; i < musicians.length; i++) {
    storage.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return storage;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var storeStrings = [];
  do {
    storeStrings.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return storeStrings;
}



