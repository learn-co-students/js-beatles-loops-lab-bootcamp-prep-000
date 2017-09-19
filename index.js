var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];




function theBeatlesPlay(musicians, instruments){
var emptyArray = [];
  for (let i = 0; i < 4; i++){
    if(i == 0){
      emptyArray.push(musicians[0] + " plays " + instruments[0])
    } else{
      emptyArray.push(musicians[i] + " plays " + instruments[i])
    }
  } return emptyArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
var newArray = [];
  var i = 0;
while (i < facts.length){
  newArray.push(facts[i] + "!!!");
  i++;
} return newArray;
}

function iLoveTheBeatles(number){
var emptyArray = [];
  do{
    emptyArray.push("I love the Beatles!");
    number += 1;
  } while (number < 15);
  return emptyArray;
}
