function theBeatlesPlay(musicians, instruments){
  var theBeatles = [];
  for(var i = 0; i < musicians.length; i++){
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}



function johnLennonFacts(facts){
  var i = 0;
  var excitedFacts = [];
  while(i<facts.length){
    excitedFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(n){
  var love = [];
  do {
    love.push(`I love the Beatles!`);
    n++;
  } while(n < 15);
  return love;
}
