// add solution here


function theBeatlesPlay(musicians, instruments) {
  var arr=[];
  for (let i=0; i< musicians.length; i++) {
    var str = musicians[i] + " plays " + instruments[i]
    arr.push(str)
  }
  return arr;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
  }
  return facts;
}


function iLoveTheBeatles(n) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    n++;
  } while (n < 15);
  return arr;
}





