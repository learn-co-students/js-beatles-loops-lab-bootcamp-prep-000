
function theBeatlesPlay(musicians, instruments) {
    var array = [];
    for (var i=0; i < 4; i++) {
      
      array.push(musicians[i] + " plays " + instruments[i]);
    }
    return array;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var num = 0;
  while (num < facts.length) {
    newFacts.push(facts[num] + "!!!");
    num++;
  }
  return newFacts;
}

function iLoveTheBeatles (num) {
  var array =[] 
  
  do {
  array.push("I love the Beatles!") 
  num++;  
  }  
  while (num<15) ; 
  return array 
  
}
  
  
  
  