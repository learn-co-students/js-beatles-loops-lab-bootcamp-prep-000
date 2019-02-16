// add solution here
function theBeatlesPlay(musicians, instruments) {
  var tempArray = [];
  
  for (let i = 0; i < musicians.length; i++) {
    tempArray.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return tempArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  
  var i = 0;
  
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  
  return facts;
}

function iLoveTheBeatles(n) {
  var beatlesArray = [];
  
  do {
    beatlesArray.push('I love the Beatles!')
    n++;
  } while (n < 15)
  
  return beatlesArray;
}