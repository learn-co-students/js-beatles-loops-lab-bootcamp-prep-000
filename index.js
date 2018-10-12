// add solution here
const theBeatlesPlay = (musicians, instruments) => {
  const beatles = [];
  for (let i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatles;
};

const johnLennonFacts = (facts) => {
  let i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
};

const iLoveTheBeatles = (n) => {
  const arr = [];
  do {
    arr.push('I love the Beatles!');
    n++;
  } while(n < 15);
  return arr;
};
