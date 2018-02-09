function theBeatlesPlay(musicians, instruments){
  var players = [];
  for(let i = 0; i < 4; i++){
    players.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return players;
}
function johnLennonFacts(facts){
  var newFacts = [];
  let i = 0;
  while(i < facts.length){
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}
function iLoveTheBeatles(num){
  const empty = [];
  do{
    empty.push("I love the Beatles!");
    num++
  }
  while(num < 15)
    return empty;
}