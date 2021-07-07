// add solution here
function theBeatlesPlay(musicians, instruments) {
  var allMusicians = [];
  for (var i = 0; i < musicians.length; i++) {
  allMusicians.push(musicians[i] + " plays " + instruments[i]);
  }
  return allMusicians;
}

function johnLennonFacts(facts) {
  var addArray = [];

   for (var i = 0; i < facts.length; ++i){
    addArray.push(facts[i] + "!!!");
  }

   return addArray;
}

function iLoveTheBeatles(n) {
  var addArray = [];
  do {
    addArray.push("I love the Beatles!");
    n++;
}    while( n < 15 );
  
  return addArray;
  
  }