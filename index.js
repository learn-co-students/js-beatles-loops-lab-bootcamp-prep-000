function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];

  emptyArray.push(`${musicians[0]} plays ${instruments[0]}`);
  
  for (let i = 1; i<musicians.length; i++){
    emptyArray[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  
  return emptyArray;
}

function johnLennonFacts(facts){
  var myArray = [];
  var counter = 0;
  while (facts.length > myArray.length){
    myArray.push(facts[counter] + "!!!"); 
    counter++;
  }
  return myArray;
}

function iLoveTheBeatles(number){
  var emptyArray = [];
  do{
    emptyArray.push("I love the Beatles!");
    number++;
  }
  while(number < 15);
  
  return emptyArray;
}

  // for (int i = 0; i < musicians.length(); i++){
  //   for (int i = 0; i < instruments.length(); i++){
  //   console.log(`${musicians[i]} plays ${instruments[i]}`);
  // }
  // }