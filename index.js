function theBeatlesPlay(musicians,instruments){
  var array = [];
  
  for(let i = 0;i < musicians.length;i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return array;
}

function johnLennonFacts(facts){
  var i = 0;
  while(facts.length > i){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var love = [];
  do{
    love.push("I love the Beatles!");
    number++;
  }while(number < 15)
  return love;
}