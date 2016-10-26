function theBeatlesPlay(musician, instrument){
  var musicianToInstrument = [];
  for(var i=0; i < musician.length; i++){
    musicianToInstrument.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return musicianToInstrument;
}

function johnLennonFacts(facts){
  var emphasizedFacts = []
  var i = 0;
  while(i < facts.length){
    emphasizedFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return emphasizedFacts;
}

function iLoveTheBeatles(num){
  var statements = [];
  statements.push('I love the Beatles!')
  if(num < 15){
    do{
      statements.push('I love the Beatles!')
      num--;
    }while(num > 0);
  }
  return statements;
}
