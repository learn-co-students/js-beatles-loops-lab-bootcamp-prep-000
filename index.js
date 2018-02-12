function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  
  for (var i = 0; i < musicians.length; i++){
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return newArray;
  
}

function johnLennonFacts(facts) {
  var factsArray = [];
  var factNumber = 0;
  do {
    factsArray.push(facts[factNumber] + "!!!");
    factNumber++;
  } while (factNumber < facts.length);
  return factsArray;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  var counter = 0;
 
  do {
    newArray.push("I love the Beatles!");
    counter++;
  } while ((counter <= number) && (number < 15));
  
  return newArray;
}





