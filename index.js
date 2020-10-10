// add solution here

function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  
  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return arr;
}

function johnLennonFacts(facts) {
  
  let factsWithExlamation = [];
  let i = 0;
  while (i < facts.length) {
    factsWithExlamation.push(`${facts[i]}!!!`)
    i++;
  }
  
  return factsWithExlamation;
}

function iLoveTheBeatles(num) {
  let arr = [];
  
  do {
    
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  
  return arr;
}