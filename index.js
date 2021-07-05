// add solution here

var musicians = ["John Lennon", "Paul McCartney",  "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

 
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < 4; i++) {
    emptyArray.push(musicians[i] + " " + "plays" + " " + instruments [i])
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var i = 0
  var exclamation = []
  while(i < facts.length) {exclamation.push(facts[i] + "!!!"); i++}
  return exclamation
}

function iLoveTheBeatles(num) {
  var newArray = []
  do {newArray.push("I love the Beatles!"); num++}
  while (num < 15)
  return newArray
}