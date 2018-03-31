const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var storage = [];
  for (let i = 0; i < 4; i++) {
    storage.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return storage;
}


const facts = [
  "He was the last Beatle to learn to drive", 
  "He was never a vegetarian", 
  "He was a choir boy and boy scout", 
  "He hated the sound of his own voice"];
  
function johnLennonFacts(facts) {
  var excitingFacts = [];
  var i = 0;
  while (excitingFacts.length < facts.length) {
    excitingFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return excitingFacts;
}

function iLoveTheBeatles(n) {
  var storeStrings = [];
  do {
    storeStrings.push("I love the Beatles!");
    n++;
  } while (n < 15); {
  }
  return storeStrings;
}



