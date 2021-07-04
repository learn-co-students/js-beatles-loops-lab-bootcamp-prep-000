function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; i < musicians.length; ++i) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    ++i;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  let array2 = [];
  let i = 0;
  do {
    array2.push('I love the Beatles!');
    i++;
  } while (n < 15 && i <= n);
  return array2;
};
