

 function theBeatlesPlay (musicians, instruments) {
    var allMusicians = [];
    for (var i=0; i < musicians.length; i++) {
      allMusicians.push(musicians[i] + " plays " + instruments[i]);
    }
 return allMusicians; 
 }

function johnLennonFacts(facts) {
  var newFacts = [];
  var count = 0;
  while (count < facts.length) {
    newFacts.push(facts[count] + "!!!");
    count++;
  }
  return newFacts;
}

function iLoveTheBeatles (num) {
  var love = [];
  
  do {
    love.push("I love the Beatles!"); 
    num++;
  } while (num < 15);
  return love; 
}






