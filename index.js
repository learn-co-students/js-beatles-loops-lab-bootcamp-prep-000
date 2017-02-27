function theBeatlesPlay(musicians, instruments){
  var theBand = [];
  for(var i = 0; i < musicians.length; i++){
    theBand.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return theBand
}

function johnLennonFacts(facts){
  var newFacts = [];
  for(var i = 0; i < facts.length; i++){
    newFacts.push(`${facts[i]}!!!`);
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  var soMuchLove = [];
  do{
    soMuchLove.push("I love the Beatles!")
    number++
  }
  while(number < 15);
  return soMuchLove;
}
