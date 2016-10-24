function theBeatlesPlay(musicians,instruments){
  var musiciansAndInstruments = [];
  for(var i = 0; i < musicians.length; i++){
    musiciansAndInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musiciansAndInstruments
}

function johnLennonFacts(facts){
  var excitingFacts = []
  var i = 0
  while(i < facts.length){
    excitingFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return excitingFacts;
}

function iLoveTheBeatles(num){
  var newArray = [];
  do{
    newArray.push("I love the Beatles!");
    num++
  }while(num < 15);
  return newArray
}
