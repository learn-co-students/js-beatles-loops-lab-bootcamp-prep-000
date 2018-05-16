function theBeatlesPlay(musicians, instruments){
  var plays = [];
  for(let i = 0; i < musicians.length; i++){
    plays.push(musicians[i] + " plays " + instruments[i]);
  }
  return plays;
}

function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0;
  while(i < facts.length){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var love = [];
  do { 
    love.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return love;
}
