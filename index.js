function theBeatlesPlay(musician, instrument) {
  var list = [];
  var i;
  for (i = 0; i < musician.length; i++) {
    list.push(musician[i] + ' plays ' + instrument[i])
  }
  return list;
}

function johnLennonFacts(facts) {
  var list = [];
  var i = 0;
  while (i < facts.length) {
    list.push(facts[i] + "!!!");
    i++;
  }
  return list;
}

function iLoveTheBeatles(num) {
  var list = [];
  do {
    list.push("I love the Beatles!");
    num--;
  } while (num >= 0 && num < 15)
  
  return list; 
}










