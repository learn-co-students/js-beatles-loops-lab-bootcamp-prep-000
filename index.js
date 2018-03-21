function theBeatlesPlay(musicians, instruments) {
  const array = [];
  
  for (let i = 0; i<musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(fact) {
  const facts = [];
  let e = 0;
  while(e<fact.length) {
    facts.push(fact[e] + "!!!");
    e++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  const love = [];
  do {
    love.push('I love the Beatles!');
    num++;
  } while(num < 15);
  return love;
}