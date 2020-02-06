// add solution here
function theBeatlesPlay(musicians, instruments) {
  var ret=[];
  for (var x=0;x < musicians.length;x++) {
    ret.push(musicians[x] + " plays " + instruments[x]);
  }
  return ret;
}

function johnLennonFacts(facts) {
  for (var x=0;x < facts.length;x++) {
    facts[x]+="!!!";
  }
  return facts;
}

function iLoveTheBeatles(num) {
  num=parseInt(num);
  var ret=[];
  do {
    ret.push("I love the Beatles!");
    num+=1;
  } while (num < 15)
  return ret;
}