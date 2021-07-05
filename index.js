

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  const arr = [];
  let n = 0;
  while (facts.length > n) {
    arr.push(`${facts[n]}!!!`);
    n++;
  }
  return arr;
}

function iLoveTheBeatles(number) {
  const arr = [];
  do {
    arr.push(`I love the Beatles!`);
    number++;
  }
  while(number < 15); {
    return arr;
  }
}




