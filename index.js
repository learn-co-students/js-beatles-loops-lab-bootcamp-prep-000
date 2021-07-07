var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray
}

const facts = [
    "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
function johnLennonFacts(facts) {
  var j = [];
  var l = 0;
  while (l < facts.length) {
    j.push(facts[l] + "!!!"); l++;
  }
  return j
}

var b = 0;
function iLoveTheBeatles(b) {
  var beats = [];
do {
  beats.push("I love the Beatles!"); b++;
} while (b < 15);
return beats
}