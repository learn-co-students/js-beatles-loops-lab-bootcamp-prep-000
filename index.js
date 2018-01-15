function theBeatlesPlay(musicians,instruments) {
  let band = [];
  
  let members = musicians.length;
  
  for (let i = 0; i < members; i++) {
    band[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return band;
}

function johnLennonFacts(facts) {
  let l = facts.length;
  while (l > 0) {
    l--;
    facts[l] = facts[l] + `!!!`;
  }
    return facts;
}

function iLoveTheBeatles (n) {
  let love = [];
  let i = 0;
  do {
    love[i] = `I love the Beatles!`;
    i++
    n++
  }
  while (n < 15);
  return love;
}