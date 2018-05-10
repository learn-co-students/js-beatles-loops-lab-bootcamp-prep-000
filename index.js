function theBeatlesPlay(musicians, instruments){
  var theBeatles = [];
  for (let i = 0; i<musicians.length;i++){
    theBeatles.push(musicians[i] + " plays " + instruments[i])
  }
  return theBeatles
}

function johnLennonFacts(facts){
  var array = [];
  var i = 0;
  while(array.length < facts.length){
    array.push(facts[i] + "!!!");
    i++;
  }
  return array
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number += 1
  }
  while(number<15)
  return array
}