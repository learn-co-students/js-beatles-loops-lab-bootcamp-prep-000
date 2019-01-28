function theBeatlesPlay(musicians, instruments){
  var facts = [];
  for(var i=0;i<musicians.length;i++){
    facts.push(musicians[i]+" plays "+instruments[i]);
    console.log(facts[i]);
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
    love.push("i love the Beatles!");
    i--;
  } while (i > 0);
  return love;
}
