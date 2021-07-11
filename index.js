function theBeatlesPlay(musicians, instruments){
  var facts = [];
  for(var i=0;i<musicians.length;i++){
    facts.push(musicians[i]+" plays "+instruments[i]);
  }
  return facts;
}
function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length){
    facts[i] = facts[i]+"!!!"
    i++;
  }
  return facts;
}
function iLoveTheBeatles(i){
  var love = [];
  do {
    love.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return love;
}
