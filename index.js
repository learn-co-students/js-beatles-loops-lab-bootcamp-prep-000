var musicians = ["John Lennon", "Ringo Star", "Paul McCartney"];
var instruments = ["piano", "drums", "guitar"];

function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [];
  for(var i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(musicians[i] + " plays " + instruments[i])
  }
  return whoPlaysWhat;
}

function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i = i + 1;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!")
    num++;
  } while(num < 15)
  return newArray;
}
