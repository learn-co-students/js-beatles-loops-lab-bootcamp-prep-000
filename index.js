function theBeatlesPlay(musicians, instruments){
  var plays = [];
  for(let i=0; i<musicians.length; i++){
    plays.push(musicians[i] + " plays " + instruments[i]);
  }
  return plays;
}

function johnLennonFacts(facts){
  var shouts = [];
  let i = 0;
  while(i<facts.length){
    shouts.push(facts[i] + "!!!");
    i++;
  }
  return shouts;
}

function iLoveTheBeatles(number){
  var love = [];
  var n = number;
  do {
    love.push("I love the Beatles!");
  }
  while(n<15){
    love.push("I love the Beatles!");
    n++;
  }
  return love;
}