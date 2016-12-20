function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(let i=0;i<musicians.length;i++) {
    var str = musicians[i] + " plays " + instruments[i];
    arr.push(str);
  }
  return arr;
}

function johnLennonFacts(facts) {
  for(let i=0; i<facts.length; i++) {
    facts[i] = facts[i]+"!!!";
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while(num < 15)
  return arr;
}
