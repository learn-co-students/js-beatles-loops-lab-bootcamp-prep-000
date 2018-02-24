function theBeatlesPlay(musicians, instruments) {
  var forArray = [];
  for (var i = 0; i < 4; i++) {
    forArray.push(`${musicians[i]} plays ${instruments[i]}`);
}
return forArray;
}

const facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ];
      
function johnLennonFacts(facts) {
  var updatedFacts = [];
  let i = 0;
  while (i < facts.length) {
  updatedFacts.push(facts[i] + "!!!");
  i++;
  }
return updatedFacts
}

function iLoveTheBeatles(n) {
  var whileArray = [];
  
  do {
    whileArray.push('I love the Beatles!');
    n++;
  } while (n < 15);
  
  return whileArray;
}