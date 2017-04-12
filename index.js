function theBeatlesPlay(musicians, instruments){
  var musiciansInstruments = [];
  for(let i = 0; i < musicians.length; i++){
    var template = `${musicians[i]} plays ${instruments[i]}`;
    musiciansInstruments.push(template);
  }
  return musiciansInstruments;
}

function johnLennonFacts(facts){
  let i = facts.length;
  while(i-- > 0){
    facts[i] += "!!!";
  }
  return facts;
}

function iLoveTheBeatles(num){
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  }while(num < 15)
  return arr;
}
