function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (let i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts(facts) {
  var empty = [];
  let i = 0;
  while (facts.length > i) {
    empty.push(`${facts[i]}!!!`);
    i++;
  }
  return empty;
}

function iLoveTheBeatles(number) {
  var empty = [];
  do {
    empty.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return empty
}




