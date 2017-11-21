function theBeatlesPlay (musicians, instruments){
  var theBeatles = [];
  for (let i=0; i<4; i++) {
   theBeatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return theBeatles;
}

function johnLennonFacts(facts) {
  var i = 0 
  var newFacts = [];
  while (facts.length>i) {
    newFacts.push(facts[i] + '!!!');
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(i){
  var beatlesLove = [];
  do {
    beatlesLove.push('I love the Beatles!')[i];
    i++
  }
  while (i<15) {
  }
  return beatlesLove;
}