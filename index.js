function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i < musicians.length; i++) {
    var s = musicians[i] + " plays " + instruments[i];
    arr.push(s);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var newArr = [];
  i = 0;
  while(i < facts.length) {
    var newFacts = facts[i] + "!!!";
    i++;
  }
  return newArr;
}