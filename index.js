function theBeatlesPlay(musicians, instruments) {
  var map = [];
  
  for (let i = 0; i < musicians.length; i++) {
    map[i] = musicians[i].concat(' plays ', instruments[i]);
  }
  
  return map;
}

function johnLennonFacts(facts) {
  let index = facts.length - 1;
  
  while(index >= 0) {
    facts[index] += '!!!';
    index--;
  }
  
  return facts;
}

function iLoveTheBeatles(n) {
  var shouts = [];
  
  do {
    shouts.push("I love the Beatles!");
    n++;
  } while(n < 15);
  
  return shouts;
}