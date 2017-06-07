function theBeatlesPlay(musicians, instruments){
  var beatlesPlay = [];
  for(let i = 0; i < 4; i++){
     beatlesPlay.push (`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesPlay;
}

function johnLennonFacts (facts){
  let i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++
  }
  return facts;
}

let i = 0;
function iLoveTheBeatles(i){
  var love = [];
  do {
    love.push ("I love the Beatles!");
    i++;
  } while(i < 15);
  return love;
}
