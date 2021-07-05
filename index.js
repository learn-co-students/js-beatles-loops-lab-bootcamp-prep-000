function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i=0; i<musicians.length; i++){
    array[i] = musicians[i] + " plays " + instruments[i];
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
  var newArray = [];
  var i = 0;
  while(facts.length > i) {
    newArray[i] = facts[i] + "!!!";
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var lastArray = [];
  
  do{
    lastArray.push("I love the Beatles!")
    n++;
  }while(n<15);
  return lastArray;
}

