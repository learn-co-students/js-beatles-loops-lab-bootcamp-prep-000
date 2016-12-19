function theBeatlesPlay(musicians, instruments) {
  let array = [];

  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return array;
}

function johnLennonFacts(facts) {
  let i = 0;
  let array = [];
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++
  }
  return array;
}

function iLoveTheBeatles(num) {
  let array = [];

  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15)

  return array;
}
