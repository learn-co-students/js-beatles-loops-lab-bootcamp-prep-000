function theBeatlesPlay (musicians, instruments){
  var newArray =[];
  
  for (var i=0; i<musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return newArray;
}

function johnLennonFacts(facts) {
  var counter = 0;
  var newFacts = [];
  
  while(counter < facts.length) {
    newFacts.push(`${facts[counter]}!!!`);
    counter++;
  }
  
  return newFacts;
}

function iLoveTheBeatles (n) {
  var emptyArray = [];
  
  do {
    emptyArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
  
  return emptyArray;
}