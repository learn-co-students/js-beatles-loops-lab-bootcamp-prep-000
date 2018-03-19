function theBeatlesPlay(musicians, instruments) {
  var tmp = [];
  
  for (var i=0; i<musicians.length; i++) {
    tmp[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  
  return tmp;
}

function johnLennonFacts(facts) {
  var i = 0;
  var tmp = [];
  while (i < facts.length) {
    tmp[i] = `${facts[i]}!!!`;
    i++;
  }
  return tmp;
}

function iLoveTheBeatles(number) {
  var tmp = [];
  do {
    tmp.push("I love the Beatles!");
    number++
  } while (number < 15);
  
  return tmp;
}