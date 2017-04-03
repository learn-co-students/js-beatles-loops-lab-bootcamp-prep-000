const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var number = 1;


function theBeatlesPlay(musicians,instruments){
var list = []; // create new empty array

for (let i = 0; i < musicians.length;i++){

  list[i] = musicians[i] + " plays " + instruments[i];
} // end of for-loop

return list;

} // end of function theBeatlesPlay

function johnLennonFacts(facts){
var newFacts = [];
let i = 0;
while (i < facts.length){
newFacts[i] = (facts[i] + "!!!");
i++;
  }// end of while loop
  return newFacts;
} // end of function johnLennonFacts

function iLoveTheBeatles(number){
var beatlesLove = [];

do {

beatlesLove.push("I love the Beatles!");
number++;

}while (number < 15);
return beatlesLove;

} // end of function iLoveTheBeatles
