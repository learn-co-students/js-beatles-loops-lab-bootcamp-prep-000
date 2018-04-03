function theBeatlesPlay(musicians, instruments) {
  
  var result = [];
  
  for (var i = 0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return result;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];

function johnLennonFacts(facts) {
  
  var editedFacts = [];
  
  for (var i = 0; i < facts.length; i++) {
    editedFacts.push(facts[i] + "!!!");
  }
  
  return editedFacts;
}

function iLoveTheBeatles(number) {

  var results = [];
  
  do {
    number++;
    results.push("I love the Beatles!");
  } while (number < 15);
  
  return results;
}





