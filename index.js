function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(let i = 0 ; i < musicians.length; i++){
    var statement = musicians[i] + " plays " + instruments[i];
    arr.push(statement);
  }
  return arr;
}

function johnLennonFacts(facts){
  var factCounter = 0;
  while(factCounter < facts.length){
    facts[factCounter] = facts[factCounter] + "!!!"; 
    factCounter++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
  }while(++num < 15)
  
  return arr;
}