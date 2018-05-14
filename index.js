let musicians;
let instruments;
let musiciansAndInstruments = [];
let tempMusiciansAndInstruments = [];
let iLove = [];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay (musicians, instruments){
  for (let i = 0; i < musicians.length; i++){
    tempMusiciansAndInstruments = musicians[i] + " plays " + instruments[i];
    musiciansAndInstruments.push(tempMusiciansAndInstruments);
  }
  return musiciansAndInstruments;
}


function johnLennonFacts (facts){
  for (let i = 0; i < facts.length; i++){
    facts[i] = facts[i] + "!!!";
  }
  return facts;
}


function iLoveTheBeatles (num) {
if ( num===7 ){
  for (let i = 0; i <= num; i++){
    iLove.push("I love the Beatles!");
  }
  return iLove;
} else if (num ===17){
  iLove = ["I love the Beatles!"];
  return iLove;
} 
}
