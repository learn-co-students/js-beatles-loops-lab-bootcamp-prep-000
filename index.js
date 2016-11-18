function theBeatlesPlay(musicians, instruments) {
  var stringArray = [];
  for(let i = 0; i < musicians.length; i++){
    stringArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return stringArray;
}

function johnLennonFacts(facts){
  var newFacts = [];
  let i = 0;
  while(i < facts.length){
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  var whoDoILove = [];
  do {
    whoDoILove.push("I love the Beatles!")
  } while (number++ && number < 15);
  return whoDoILove;
}
