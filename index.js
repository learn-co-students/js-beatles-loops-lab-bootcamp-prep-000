function theBeatlesPlay(musicians, instruments) {
  let tmpArr = [];
  for (var i=0; i < musicians.length; i++) {
    let str = musicians[i] + " plays " + instruments[i];
    tmpArr.push(str);
  }
  return tmpArr;
}

function johnLennonFacts(facts) {
  let n = 0
  while (n < facts.length) {
    facts[n] = facts[n] + "!!!"
    n++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  let arr = [];
  do {
    arr.push("I love the Beatles!")
    n++;
  } while(n < 15);
  return arr;
}
