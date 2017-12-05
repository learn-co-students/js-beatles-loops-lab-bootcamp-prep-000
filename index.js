function theBeatlesPlay(musicians, instruments) {
  var play = [];
  
  for(let i = 0; i < musicians.length; i++) {
    play.push(musicians[i] +" plays " + instruments[i]); 
  }
  return play;
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

function iLoveTheBeatles(i) {
  var newLove = [];
  
  do { newLove.push("I love the Beatles!");
    i++;
  }
  while (i < 15);
  return newLove;
}

