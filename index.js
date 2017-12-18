var beatlesMusicians = [
  "John Lennon", 
  "Paul McCartney", 
  "George Harrison", 
  "Ringo Starr"
  ];

var beatlesInstruments = [
  "guitar", 
  "bass", 
  "guitar", 
  "drums"];

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < 4; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(arrayOfFacts) {
  var newArray = [];
  var i = 0;
  while (i < arrayOfFacts.length) {
    newArray.push(arrayOfFacts[i] + "!!!");
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var openArray = [];
  do {
    openArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return openArray;
}






