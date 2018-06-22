function theBeatlesPlay(music, instruments){
  var beatleArray = [];
  for(let i = 0; i < music.length; i++){
    beatleArray.push(music[i] + " plays " + instruments[i]);
  }
  return beatleArray;
}

function johnLennonFacts(facts){
  var fact = [];
  let counter = 0;
  while(counter < facts.length){
    fact.push(facts[counter++]+"!!!");
  }
  return fact;
}

function iLoveTheBeatles(n){
  var someVar = [];
  do{
    someVar.push("I love the Beatles!");
  } while (++n < 15)
  return someVar;
}