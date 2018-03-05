
function theBeatlesPlay(musicians, instruments){
  var bandAndInstruments = [];
  
  for(let i = 0; i < musicians.length; i++){
    bandAndInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return bandAndInstruments;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i<facts.length){
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  const array = [];
  
  do{
    
    array.unshift("I love the Beatles!")
    num++;
    
  }while(num<15)
  return array;
}