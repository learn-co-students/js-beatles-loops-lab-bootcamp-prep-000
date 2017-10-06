function theBeatlesPlay(musicians, instruments){
  const result = [];
  for(let i = 0; i < musicians.length; i++){
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}

function johnLennonFacts(facts){
  let count = facts.length;
  while(count >= 0){
    facts[count-1] = facts[count-1] + "!!!";
    count--;
  }
  return facts;
}

function iLoveTheBeatles(n){
  const result = [];
  do {
      result.push("I love the Beatles!")
      n++;
  } while(n < 15)
  return result;
}
