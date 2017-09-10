function theBeatlesPlay (musicians, instruments) {
  var beat = [];
  for (var i = 0; i < musicians.length; i++) {
    beat.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return beat;
}

function johnLennonFacts() {
var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
var newFacts = [];
var i = 0;
while (i < facts.length) {
newFacts.push(facts[i] + "!!!");
i++;
}
return newFacts;
}

function iLoveTheBeatles(number) {
  var newNumber = [];
  do {
    newNumber.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return newNumber;
}
