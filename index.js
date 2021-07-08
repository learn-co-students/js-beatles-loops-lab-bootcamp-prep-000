// add solution here

var array = [];
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicains, instruments) {
  for (let i = 0; i < 4; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array;
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function johnLennonFacts(facts) {
  let i = 0
  var lennonFacts = []
  while (i < facts.length) {
    lennonFacts.push(facts[i] + '!!!')
    i++
  }
  return lennonFacts;
}


function iLoveTheBeatles(n) {
  var loveBeatles = [];
  do {
    loveBeatles.unshift('I love the Beatles!');
    n++
  } while (n < 15);
  return loveBeatles;
}


