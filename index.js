// add solution here
var array = [];
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i <= 3; i++) {
    if (i === 0) {
      array.push(`${musicians[0]} plays ${instruments[0]}`)
    } else if (i === 1) {
      array.push(`${musicians[1]} plays ${instruments[1]}`)
    } else if (i === 2) {
      array.push(`${musicians[2]} plays ${instruments[2]}`)
  } else {
     array.push(`${musicians[3]} plays ${instruments[3]}`)
  }
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
  const updatedFacts = [];
  let index = 0;
  while (index < facts.length) {
    updatedFacts.push(`${facts[index]}!!!`);
    index++;
  }
  return updatedFacts;
}

function iLoveTheBeatles(num) {
  let emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return emptyArray;
}
 



