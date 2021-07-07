// add solution here

function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlay = [];
  
  for (var i = 0; i < 4; ++i) {
    theBeatlesPlay.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return theBeatlesPlay;
}

function johnLennonFacts(facts) {
  var i = 0;
  var johnLennonFacts = [];
  
  while (i < facts.length) {
    johnLennonFacts.push(facts[i] + "!!!");
    ++i;
  }
  
  return johnLennonFacts;
}

function iLoveTheBeatles(num) {
  var iLoveTheBeatles = [];
  
  do {
    iLoveTheBeatles.push("I love the Beatles!");
    ++num;
  } while (num < 15);
  
  return iLoveTheBeatles;
}