// add solution here

function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var random = [];
  
  for (var i = 0; i < arrayOfMusicians.length; i++) {
    random.push(arrayOfMusicians[i] + " plays " + arrayOfInstruments[i]);
  }
  
  return random;
}

function johnLennonFacts(arrayOfFacts) {
  
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  
  var newFacts = [];
  
  var i = 0;
  
  while (i < arrayOfFacts.length) {
    newFacts.push(arrayOfFacts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var store = [];
  do {
    store.push("I love the Beatles!");
    number++;
  }
  while (number < 15)
  
  return store;
}