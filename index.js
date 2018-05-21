function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; i< musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  let x = facts.length - 1;
  while (x >= 0) {
    facts.splice(x, 1, (facts[x]+"!!!"));
    x--;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  let array = [];
  let n = 0;
  do {
    array.push('I love the Beatles!');
    n++;
  } while (n <= number && number < 15);
  return array;
}