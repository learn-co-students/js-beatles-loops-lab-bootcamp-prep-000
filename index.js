function theBeatlesPlay (musicians, instruments) {
  var BeatlesArray = [];
  for (var i = 0; i < 4; i++) {
    BeatlesArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return BeatlesArray;
}

function johnLennonFacts(facts) {
  var johnLennonExclamation = [];
  var i = 0;
  while(facts[i]) {
    johnLennonExclamation.push(facts[i] + "!!!");
    i++;
  }
  return johnLennonExclamation;
}

function iLoveTheBeatles(number) {
  var beatlesArray = [];
//  var i = 0;
  do { 
    beatlesArray.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return beatlesArray;
}