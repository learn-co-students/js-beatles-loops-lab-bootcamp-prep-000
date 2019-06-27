// add solution here
var musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musician, instrument) {
  var array = [];
  
  for (let i = 0; i < 4; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  
  return array
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
    newFacts.push(facts[i] + '!!!')
    i++;
      }
return newFacts;
  
}

function iLoveTheBeatles (num) {
  var array = [];
  
  do {
    array.push('I love the Beatles!')
    num++
  }
  while (num < 15);

  
  return array;
}

