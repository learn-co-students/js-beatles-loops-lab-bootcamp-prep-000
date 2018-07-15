// add solution here
function theBeatlesPlay(musicians,instruments) {
  var allBeatles = [];
  for(let i = 0; i < musicians.length; i++){
    allBeatles.push(musicians[i] + " plays " + instruments[i])
  }
  return allBeatles
}

function johnLennonFacts(){
  const johnFacts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  var facts = [];
  var i = 0
  while(i < johnFacts.length){
    facts.push(johnFacts[i] + "!!!")
  }
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!")
    n++
  }
  while (n < 15)
  return newArray
}