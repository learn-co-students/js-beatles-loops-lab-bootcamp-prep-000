function theBeatlesPlay( musicians, instruments ) {
  var arr = [];
  // iterates through musicians array
  for (var i = 0; i < musicians.length; i++) {
    // pushes a string with current value of musicians index and intruments index to arr
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

function johnLennonFacts( facts ) {
  var newFacts = [];
  var i = 0;
  // while i is < the length of the facts array
  while (i < facts.length) {
    // pushes string with current value of facts index to newFacts array with "!!!"
    newFacts.push(facts[i] + '!!!');
    // goes to next index in facts array
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles( number ) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return arr;
}
