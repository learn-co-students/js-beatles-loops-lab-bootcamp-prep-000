function theBeatlesPlay(musicians, instruments) {
  var bodyOfMusicians = [];
  
  for (var i = 0; i < musicians.length; i++) {
    bodyOfMusicians.push(musicians[i] + " plays " + instruments[i]);
}
  return bodyOfMusicians;
}

function johnLennonFacts(facts) {
  var johnFacts = [];
  
  var count = 0;
  while (count < facts.length) {
    johnFacts.push(facts[count] +"!!!");
    count++;
    
  }
  return johnFacts;
}

function iLoveTheBeatles(number) {
  var loveBeatles = [];
  
  do {
    loveBeatles.push("I love the Beatles!");
    number++;
    } while (number < 15);
    
    return loveBeatles;
    
  }
