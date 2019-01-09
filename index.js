function theBeatlesPlay(musicians, instruments){
  var allMusicians = [];
  for (var i = 0; i < musicians.length; i++) {
    allMusicians.push(musicians[i] + " plays " + instruments[i]);
  }
  return allMusicians;
} 

function johnLennonFacts(facts) {
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
      newFacts.push(facts[i] + "!!!");
      i++;
    }
    return newFacts;
}

function iLoveTheBeatles(n) {
  var arrayName = [];
  do {
    arrayName.push("I love the Beatles!");
    n++;
  } while (n < 15);
  
  return arrayName;
  
}