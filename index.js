function theBeatlesPlay(musicians, instruments){
  var bandMembers = [];
  for(let i = 0; i < musicians.length; i++){
    bandMembers.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return bandMembers;
}

function johnLennonFacts(facts){
  let i = 0;
  while(i < facts.length){
    facts[i] = `${facts[i]}!!!`;
    i++
  }
  return facts
}

function iLoveTheBeatles(n){
  var love = [];
  do{
    love.push('I love the Beatles!');
    n++
  } while(n < 15)
  return love
}