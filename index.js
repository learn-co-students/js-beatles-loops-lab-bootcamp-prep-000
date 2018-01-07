function theBeatlesPlay(musicians, instruments){
  var myArray = [];
  for (var i = 0; i < musicians.length; i++){
    myArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return myArray;
  //test completed successfully
}
/*


johnLennonFacts
iLoveTheBeatles*/

function johnLennonFacts(facts){
  for (var i = 0; i < facts.length; i++){
    //I want to take the string from facts[i] and append '!!!' at the end of it.
    //Now to figure out how to append a string. Is it just that, append?
    facts[i] = `${facts[i]}!!!`;
    
  }
  return facts;
  //test completed successfully
}

function iLoveTheBeatles(number){
  var myArray = [];
  do { 
    myArray.unshift(`I love the Beatles!`);
    number++;
  } while (number < 15)
    
  return myArray;
  
}