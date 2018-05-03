function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`) // ALWAYS array.push when you make an empty array
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []; // MUST create new array 
  let i = 0 
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++; // required if looping arrays
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = [];
  let i = n
  do {
    array.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return array
}