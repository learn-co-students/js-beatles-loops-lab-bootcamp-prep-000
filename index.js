var musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instrument = ["Guitar", "Bass Guitar", "Lead Guitar",  "Drums"];

function theBeatlesPlay(musician, instrument) {
  var sentencesArray = [];
  for (var i = 0; i < 4; i++) {
    sentencesArray.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return sentencesArray;
};

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
    while(i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
};

function iLoveTheBeatles(n) {
  var cuteArray = [];
    do {
      cuteArray.push( "I love the Beatles!" );
      n++;
    } while ( n < 15 );
  return cuteArray;
};
