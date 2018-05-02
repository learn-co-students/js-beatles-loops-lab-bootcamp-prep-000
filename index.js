function theBeatlesPlay(musicians, instruments){
  const results = [];
  for (let i = 0; i < musicians.length; i++){
    results.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return results;
}

function johnLennonFacts(facts){
  let pointer = 0;
  while(pointer < facts.length){
    facts[pointer] = facts[pointer] + '!!!';
    pointer++;
  }
  return facts;
}

function iLoveTheBeatles(count){
  const results = [];
  do {
    results.push('I love the Beatles!')
    count++;
  } while (count < 15);
  return results;
}