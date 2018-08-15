function theBeatlesPlay(musicians, instruments) {
  
  let empty = [];
  
  for (var i = 0; i < 4; i++) {
    
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
    
  }
  return empty;
}

function johnLennonFacts(facts) {
  
  let loudFacts = [];
  
  let i = 0;
  
  while (i < facts.length) {
    
    loudFacts.push(`${facts[i]}!!!`);
    
    i++;
  }
  
  return loudFacts;
}

function iLoveTheBeatles(number) {
  
  let loveArr = [];
  
  do {
    loveArr.push("I love the Beatles!");
    number++;
    
  } while (number < 15);
  
  return loveArr;
  
}


