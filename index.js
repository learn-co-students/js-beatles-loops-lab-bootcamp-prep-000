const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var theBand = new Array();
  for (let i = 0; i < musicians.length; i++) {
    theBand.push(musicians[i] + " plays " + instruments[i]); 
  }
  return theBand;
}

const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]

function johnLennonFacts(facts) {
  for (let i = 0; i < facts.length; i++) {
    facts[i] += "!!!";
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var message = [];
  do {
    message.push("I love the Beatles!")
    num++
  }
  while (num < 15);
  return message;
}