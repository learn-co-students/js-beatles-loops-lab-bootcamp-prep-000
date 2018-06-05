
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Lead Guitar", "Drums"];
var i;

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  
// For loop = "John Lennon plays guitar"
  for (var i = 0; i < musicians.length; i++) {
   emptyArray.push(musicians[i] + " plays " + instruments[i]);
  } return emptyArray;
} 

const facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var newArray =[];
  while (i < facts.length) {
    newArray.push(facts[i] + "!!!");
    i++;
  } return newArray;
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
  } while (i < 15);
}