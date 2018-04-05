function theBeatlesPlay(musicians, instruments){
 let theBeatles = [];
  for (var i = 0; i < 4; i++){
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}

function johnLennonFacts (facts){
  let i = 0;
  while(i < 4){
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(i){
  let loveBeatles = [];
  do {
    loveBeatles.push("I love the Beatles!");
    i++;
  }
  while (i < 15); 
  return loveBeatles;
}