function theBeatlesPlay(musicians, instruments) {
  
  var phrases = [];
  
  for (var i = 0; i < musicians.length; i++) {
    
    phrases.push(musicians[i] + " plays " + instruments[i])
    
  }
  return phrases
}


function johnLennonFacts(facts) {
  
  var results = [];
  var count = 0;
  
  while (count < facts.length) {
    
    results.push(facts[count] + "!!!");
  
    count++;
  }
  
  return results;
  
}

function iLoveTheBeatles(number) {
  
  var array = [];
  
  do {
    
    array.push("I love the Beatles!")
    number++;
    
  }while (number < 15);
  
  return array;
  
}