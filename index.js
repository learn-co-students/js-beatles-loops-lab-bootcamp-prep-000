// add solution here
function theBeatlesPlay(musician, instrument) {
 const whoPlaysWhat = [];
 for(let i = 0; i < 4; i++) {
  whoPlaysWhat.push(`${musician[i]} plays ${instrument[i]}`);
  
 }
 return whoPlaysWhat;
}

function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.length) {
    
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(someNumber) {
  const sayings = [];
  
  do {
    sayings.push("I love the Beatles!")
    someNumber++;
  } while(someNumber < 15)
  return sayings;
}
