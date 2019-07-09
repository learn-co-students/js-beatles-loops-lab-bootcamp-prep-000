function theBeatlesPlay(musicians, instruments) {
  var players = [];
  for(let i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    players.push(`${musician} plays ${instrument}`);
  }
  return players;
}

function johnLennonFacts(facts) {
  var excFacts = [];
  var i = 0;
  
  while(i < facts.length){
    var fact = facts[i];
    excFacts.push(fact + "!!!");
    
    i++;
  }
  return excFacts;
}

function iLoveTheBeatles(num) {
  var declarations = [];
  
  do {
    num = num + 1;
    declarations.push("I love the Beatles!");
  } while (num < 15);
  
  return declarations;
}