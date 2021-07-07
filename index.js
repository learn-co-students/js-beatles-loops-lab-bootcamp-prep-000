// add solution here
function theBeatlesPlay (musicians, instruments) {
  var beatles = [];
  for (let i = 0, l = musicians.length; i < l; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatles;
}

function johnLennonFacts (facts) {
  var loudFacts = [];
  var i = 0;
  
  while (loudFacts.length < facts.length) {
    loudFacts[i] = `${facts[i]}!!!`;
    ++i;
  }
  return loudFacts;
}

function iLoveTheBeatles (n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++
  } while (n < 15);
  return arr;
}