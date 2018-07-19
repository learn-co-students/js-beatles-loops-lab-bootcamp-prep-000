function theBeatlesPlay(musicians, instruments){
  var combo = [];
  for (let i = 0; i <= 3; i++){
    combo.push(musicians[i] + " plays " + instruments[i]);
  }
  return combo;
}

function johnLennonFacts(facts){
  var emphasis = [];
  var i = 0;
  while(i < facts.length){
    emphasis.push(facts[i] + "!!!");
    i++;
  }
  return emphasis;
}

function iLoveTheBeatles(number){
  var fan = [];
  do{
    fan.push("I love the Beatles!");
    number++;
  }while(number < 15);
  return fan;
}
