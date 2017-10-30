function theBeatlesPlay(musicians, instruments) {
  var newArray = [];

  for(let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return newArray;
}

function johnLennonFacts(facts) {
  var i = 0;

  while(i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i += 1;
  }

  return facts;
}

function iLoveTheBeatles(number) {
  var newArray = [];

  do {
    newArray.push("I love the Beatles!");
    number += 1;
  } while (number < 15);

  return newArray;
}
