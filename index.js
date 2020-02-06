function theBeatlesPlay(musicians, insutruments) {
  var allMusicians = [];
  for (var i=0; i < musicians.length; i++) {
    allMusicians.push(musicians[i] + " plays " + insutruments[i])
  }
  return allMusicians
}

function johnLennonFacts(facts) {
  var allFacts = [];
  for (var i=0; i < facts.length; i++) {
    allFacts.push(facts[i]+"!!!")
  }
  return allFacts
}

function iLoveTheBeatles(n) {
  var beatles = [];
  do{
    
  beatles.push("I love the Beatles!")
  n++; } 
    while (n < 15);
  
  return beatles;
}