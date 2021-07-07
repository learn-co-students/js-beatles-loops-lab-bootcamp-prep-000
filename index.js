// add solution here
function theBeatlesPlay(musicians, instruments){
  var myArray = [];
  for(var i = 0; i < musicians.length; i++){
    myArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return myArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  let i = 0;
  while(i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
   var newArray = [];
   
    do {
    newArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return newArray;
}