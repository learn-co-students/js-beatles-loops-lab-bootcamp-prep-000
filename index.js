function theBeatlesPlay(musicians, instruments) {
  const theBeatles = [];
  for(let i = 0; i < 4; i++ ) {
     theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}


function johnLennonFacts(facts) {
  const factsArray = [];
  let i = 0;
    while (i < facts.length) {
    factsArray.push(`${facts[i]}!!!`);
    i++; 
  }
  return factsArray; 
  
}

function iLoveTheBeatles(int) {
  const beatles = [];
  let i = 0;
  do {
    beatles.push(`I love the Beatles!`);
    i++;
  }
  while(i <= int && int < 15);
  
  return beatles;
}