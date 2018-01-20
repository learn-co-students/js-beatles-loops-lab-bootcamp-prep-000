function theBeatlesPlay (musicians, instruments) {
  var BeatlesArray = [];
  for (var i = 0; i < 4; i++) {
    BeatlesArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return BeatlesArray;
}

function johnLennonFacts(facts) {
  var johnLennonExclamation = [];
  while(johnLennonFacts[facts] !== null) {
    johnLennonExclamation.push(facts) + "!!!";
  }
  return johnLennonExclamation;
}