var musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instrument = ["Guitar", "Bass Guitar", "Lead Guitar",  "Drums"];

var boringFacts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musician, instrument) {
  var sentencesArray = [];
  for (var i = 0; i < 4; i++) {
    sentencesArray.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return sentencesArray;
};

function johnLennonFacts(boringFacts) {
  var funFacts = [];
  while (var i = 0; i < boringFacts.length; i++) {
    funFacts.push(`${boringFacts[i]}!!!`);
  }
  return funFacts;
};

function iLoveTheBeatles(n) {
  cuteArray = [];
  if n < 15 {
    do {
      array.push("I love the Beatles!");
  } while (var i = 0; i < n; i++);
  else {
    alert("Your number must be less than 15.");
  }
  return cuteArray;
};
