function theBeatlesPlay(musicians, instruments){
  const ar = [];
  for(let i = 0; i < musicians.length; ++i){
    ar.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return ar;
}

function johnLennonFacts(facts){
  let i = 0;
  while(i < facts.length){
    facts[i++] += "!!!";
  }

  return facts;
}

function iLoveTheBeatles(n){
  const ar = [];
  do {
    ar.push("I love the Beatles!");
    ++n;
  } while(n < 15);

  return ar;
}
