var musicians = ["John Lennon ", "Paul McCartney ", "George Harrison ", "Ringo Starr "];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
  	array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var moreFacts = [];
  var i = 0;
  while (i < facts.length) {
    moreFacts.push(facts[i] + "!!!");
    i++;
  }
  return moreFacts;
}

function iLoveTheBeatles(num) {
  var pepper = [];
  do {
    pepper.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return pepper;

}