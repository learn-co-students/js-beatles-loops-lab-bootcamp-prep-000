function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  for(let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts(facts) {
  let index = 0;
  let arr = [];
  while(index < facts.length) {
    arr.push(facts[index] + '!!!');
    index++;
  }
  return arr
}

function iLoveTheBeatles(n) {
  let arr = [];
  do {
    arr.push('I love the Beatles!')
    n++;
  } while (n < 15)
  return arr;
}
