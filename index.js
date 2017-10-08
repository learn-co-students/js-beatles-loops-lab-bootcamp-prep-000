function theBeatlesPlay(musicians, instruments){
  var combinedArray = [];
  for(var i=0;i<musicians.length;i++){
    combinedArray[i] = `${musicians[i]} plays ${instruments[i]}`
    console.log(combinedArray[i])
    console.log(i)
  }
  return combinedArray;
}

function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0;
  while(i<facts.length){
    newFacts[i] = `${facts[i]}!!!`
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var newArray = [];
  var i = 0;
  do{
    newArray[i] = 'I love the Beatles!'
    i++;
    n++;
  }while(n<15);
  return newArray;
}
