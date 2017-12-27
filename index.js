function theBeatlesPlay(musicians,instruments){
  var music = []
  for(var i=0;i<4;i++){
    music.push(musicians[i] + " plays "+instruments[i]);
    }
    return music
}

function johnLennonFacts(facts){
  var i=0;
  while(i<facts.length){
    facts[i] += "!!!"
    i++;
  }
  return facts
  }
  
function iLoveTheBeatles(number){
  var increment = []
  do{
   increment.push("I love the Beatles!");
    number++;
  }while(number < 15);
  return increment
}