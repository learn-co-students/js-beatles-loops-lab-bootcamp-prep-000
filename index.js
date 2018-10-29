function theBeatlesPlay(muscians, instruments) {
  var allMembers = [];
  for(let i = 0; i < muscians.length; i++) {
    allMembers.push(`${muscians[i]} plays ${instruments[i]}`);
  }
  return allMembers;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0; 
  while(i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts; 
}

function iLoveTheBeatles(number){
  let beatleLove = []; 
  do {
    beatleLove.push("I love the Beatles!");
    number++;
  }while(number < 15 );
  return beatleLove;
}