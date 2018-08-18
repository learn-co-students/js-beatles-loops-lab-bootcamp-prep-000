// add solution here
function theBeatlesPlay(musicians, instruments) {
  
  var emptyArray = [];
  
  for (let i = 0; i <= 3; i++ ) {
    emptyArray.push(musicians[i] + " plays " + instruments[i])
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  
  let i = 0;
  
  var emptyArray = [];
  
  while (i < facts.length) {
    emptyArray.push(facts[i] + "!!!")
    
    i++
  }
  return emptyArray;
}

function iLoveTheBeatles(n) {
  var emptyArray = [];
  
  do {
    emptyArray.push("I love the Beatles!")
    
    n++
  }while (n < 15);
  return emptyArray
}