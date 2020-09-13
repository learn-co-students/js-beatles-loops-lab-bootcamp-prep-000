// add solution here

function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (let i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  let i = 0;
  while (newFacts.length < facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i += 1;
  }
  return newFacts;
}

function iLoveTheBeatles(num) {
  var empty = [];
  do {
    empty.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return empty;
}