function theBeatlesPlay(musicians, instruments) {
  var facts = [];
  for (var i = 0; i < musicians.length; i++) {
    facts.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return facts;
}

function johnLennonFacts(array) {
  var johnFacts = [];
  for (var i = 0; i < array.length; i++) {
    johnFacts.push(`${array[i]}!!!`);
  }
  return johnFacts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
  } while (++n < 15);
  return array;
    
  
}