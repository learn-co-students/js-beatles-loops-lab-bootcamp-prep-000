function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (let i=0; i<musicians.length; i++) {
    empty.push(musicians[i]+" plays " +instruments[i]);
  }
  return empty;
}

function johnLennonFacts (facts) {
  let i=0;
  while (facts[i]) {
    facts[i]=facts[i]+"!!!"
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var beatlesLove = [];
  do {
    beatlesLove.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return beatlesLove; 
}