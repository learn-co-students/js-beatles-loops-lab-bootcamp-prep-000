
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i <= 3; i++) {
      arr.push(musicians[i] + " plays " + instruments[i]);
  }
    return arr; 
}

function johnLennonFacts(facts) {
      var i = 0;
    var newFacts = [];
  while (facts.length > i) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return arr;
  
  
}