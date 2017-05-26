function theBeatlesPlay(musician, instruments) {
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var emptyArray = [];
  for(var i = 0; i < musicians.length; i++){
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}

function johnLennonFacts(facts) {
    
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
      newFacts.push(facts[i] + "!!!")
      i++;
    }
    return newFacts;
}

function iLoveTheBeatles(num) {
  var phrase = [];
  do {
    phrase.push("I love the Beatles!") 
    num++;
  } while (num < 15);
  return phrase;
}
  
