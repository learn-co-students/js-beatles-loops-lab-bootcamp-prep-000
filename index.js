function theBeatlesPlay(musicians, instruments) {
  const array = [];

  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  const exclamations = [];
  let i = 0;

  while (i < facts.length) {
    exclamations.push(facts[i] + "!!!");
    i++;
  }
  return exclamations;
}

function iLoveTheBeatles(n) {
  const love = [];

  do {
    love.push("I love the Beatles!");
    n++;
  } while (n < 15);

  return love;
}
