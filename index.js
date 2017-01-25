function theBeatlesPlay(musicians, instruments) {
  var sArray = [];
  var sString;
  for (let i=0; i<musicians.length; i++) {
    sString = musicians[i]+ " plays " + instruments[i]
    sArray.push(sString);
  }
  return sArray
}

function johnLennonFacts(facts) {
  var sArray = [];
  var i=0;
  while (i<facts.length) {
    sArray.push(facts[i]+'!!!');
    i++
  }
  return sArray
}

function iLoveTheBeatles(spicyPoop) {
  var sArray = [];
  do {
    sArray.push('I love the Beatles!')
    spicyPoop++
  } while (spicyPoop<15);
  return sArray
}
